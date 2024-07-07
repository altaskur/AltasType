import { errorMessage, infoMessage } from './customMessages';
import {
  checkIfJson, checkIfYaml, checkUserArgs,
} from './checkArgs';
import showWelcomeMessage from './welcomeMessage';
import getSwagger from './getFile';

showWelcomeMessage();
infoMessage('Checking the file...');

(async () => {
  try {
    const args = await checkUserArgs();
    infoMessage('Getting the Swagger file...');

    const swagger = await getSwagger(args);

    const isJson = checkIfJson(swagger);
    const isYaml = checkIfYaml(swagger);

    if (!isJson && !isYaml) {
      errorMessage('The file must be a JSON or YAML file');
      process.exit(1);
    }

    infoMessage('The file is a JSON or YAML file');
  } catch (error: unknown) {
    errorMessage(error as string);
    process.exit(1);
  }
})();
