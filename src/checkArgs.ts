import prompts from 'prompts';
import { existsSync } from 'fs';
import { load } from 'js-yaml';
import {
  alertMessage, errorMessage, successMessage,
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

const getArgs = (args: string[]): string => {
  if (args.length < 3) {
    throw new Error('You must provide a path or URL');
  }
  return args[2];
};

const checkExtension = (element:string):boolean => {
  if (!element.endsWith('.json') && !element.endsWith('.yaml')) {
    return false;
  }
  return true;
};

const checkUserArgs = async (): Promise<string> => {
  try {
    const args = getArgs(process.argv);
    const checkArgs = checkExtension(args);
    if (!checkArgs) {
      errorMessage('The file must be a JSON or YAML file');
      throw new Error('The file must be a JSON or YAML file');
    }
    successMessage(args);
    return args;
  } catch (error) {
    alertMessage('You must provide a path or URL');
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
  }
};

export {
  checkUrl,
  checkUserArgs,
  checkFilePath,
  checkIfJson,
  checkIfYaml,
};
