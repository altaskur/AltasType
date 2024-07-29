import { errorMessage, infoMessage } from './customMessages';
import {

  checkIfJson, checkIfYaml,
  getMethod,
} from './checkArgs';
import showWelcomeMessage from './welcomeMessage';
import getSwagger from './getFile';
import evaluateInfo from './zodSchemas';
import { generateTypes, generateFileTypes } from './generateTypes';

showWelcomeMessage();
infoMessage('Checking the file...');

(async () => {
  try {
    const path = await getMethod();

    const swagger = await getSwagger(path);

    const isJson = checkIfJson(swagger);
    const isYaml = checkIfYaml(swagger);

    if (!isJson && !isYaml) {
      errorMessage('The file must be a JSON or YAML file');
      process.exit(1);
    }

    const structure = evaluateInfo(JSON.parse(swagger));

    const types = generateTypes(structure);
    generateFileTypes(types!);

    infoMessage('The types were generated successfully');
  } catch (error: unknown) {
    errorMessage(error as string);
    process.exit(1);
  }
})();
