import { readFileSync } from 'fs';
import { checkFilePath, checkUrl } from './checkArgs';
import { errorMessage, infoMessage } from './customMessages';

const getSwagger = async (url: string): Promise<string > => {
  infoMessage('Checking if is a local file...');

  if (checkFilePath(url)) {
    infoMessage('Reading the file...');
    return readFileSync(url, 'utf8');
  }
  errorMessage('The file does not exist');

  infoMessage('Checking if is a URL...');

  const response = await checkUrl(url);
  if (!response) {
    throw new Error('The file does not exist');
  }

  infoMessage('Reading the URL...');
  const data = await fetch(url);
  return data.text();
};

export default getSwagger;
