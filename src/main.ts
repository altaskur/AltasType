import { errorMessage, infoMessage } from './customMessages';
import {
  getMethod,
} from './checkArgs';
import showWelcomeMessage from './welcomeMessage';
import { getSwagger, getSwaggerStructure } from './getFile';
import evaluateInfo from './zodSchemas';
import { generateTypes, generateFileTypes, generateOpenAPIFile } from './generateTypes';

showWelcomeMessage();
infoMessage('Checking the file...');

(async () => {
  try {
    const path = await getMethod();

    const swagger = await getSwagger(path);

    const swaggerParsed = getSwaggerStructure(swagger);

    const structure = evaluateInfo(swaggerParsed);

    generateOpenAPIFile(JSON.stringify(swaggerParsed, null, 2));
    infoMessage('The OpenAPI file was generated successfully');

    const types = generateTypes(structure);

    generateFileTypes(types!);

    infoMessage('The types were generated successfully');
  } catch (error: unknown) {
    errorMessage(error as string);
    process.exit(1);
  }
})();
