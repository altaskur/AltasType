import * as fs from 'fs';
import { OpenApiObject } from './zodSchemas';

const generateTypes = (structure: OpenApiObject): string => {
  const { components } = structure;

  if (!components) {
    throw new Error('No components found');
  }

  const { schemas } = components;

  if (!schemas) {
    throw new Error('No schemas found');
  }

  const keys = Object.keys(schemas);

  let types = '';

  keys.forEach((key) => {
    let modifiedKey = key;
    if (!Number.isNaN(parseInt(key[0], 10))) {
      modifiedKey = `_${key}`;
    }
    types += `export interface ${modifiedKey} {\n`;
    const { properties } = schemas[key];

    Object.keys(properties).forEach((property) => {
      if (properties[property].type === 'integer') {
        properties[property].type = 'number';
      }

      types += `  ${property}: ${properties[property].type};\n`;
    });

    types += '}\n';
  });
  return types;
};

const generateOpenAPIFile = async (types: string) => {
  fs.writeFileSync('./results/openApi.json', types);
};

const generateFileTypes = async (types: string) => {
  fs.writeFileSync('./results/apiTypes.ts', types);
};

export { generateTypes, generateFileTypes, generateOpenAPIFile };
