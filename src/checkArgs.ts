import prompts from 'prompts';
import { existsSync } from 'fs';
import { load } from 'js-yaml';

import {
  errorMessage, successMessage,
} from './customMessages';

const checkFilePath = (path: string): boolean => existsSync(path);

const checkUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url);
    return !!response;
  } catch (error) {
    return false;
  }
};

const checkIfJson = (element: string): boolean => JSON.parse(element);
const checkIfYaml = (element: string): boolean => Boolean(load(element));

const checkArgs = (args: string): boolean => {
  if (args === '') {
    throw new Error('The path cannot be empty');
  }
  return true;
};

const getArgs = (args: string[]): string => {
  if (args.length < 3) {
    throw new Error('You must provide a path or URL');
  }
  return args[2];
};

const checkExtension = (element: string): boolean => {
  if (!element.endsWith('.json') && !element.endsWith('.yaml')) {
    throw new Error('The file must be a JSON or YAML file');
  }
  return true;
};

const automaticFunction = (args: string[]): string => {
  const path = getArgs(args);
  checkExtension(path);
  return path;
};

const cliFunction = async (): Promise<string> => {
  const response = await prompts({
    type: 'text',
    name: 'path',
    message: 'Please provide a path or URL:',
    validate: (value) => {
      if (value === '') {
        return 'The path cannot be empty';
      }
      return value.endsWith('.json') || value.endsWith('.yaml') ? true : 'The file must be a JSON or YAML file';
    },
  });

  if (response.path === undefined) {
    throw new Error('The path cannot be empty');
  }

  successMessage(response.path);
  return response.path;
};

const getMethod = () => {
  const args:string[] = process.argv;

  if (args.includes('--cli')) {
    return cliFunction();
  }

  if (args.length <= 3) {
    return automaticFunction(args);
  }

  errorMessage('You must provide a path or URL');
  return process.exit(1);
};

export {
  getMethod,
  checkArgs,
  checkUrl,
  checkFilePath,
  checkIfJson,
  checkIfYaml,
};
