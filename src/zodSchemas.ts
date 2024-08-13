/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

export interface OpenApiObject {
  openapi?: string;
  swagger?: string;
  info: any;
  components?: {
    schemas: any;
  };
  definitions?: {
    [key: string]: {
      type: string;
      properties:{
        [key: string]: {
          type: string;
          format: string;
        };
      }
    };
  };
}

const ContactSchema = z.object({
  name: z.string().optional(),
  url: z.string().optional(),
  email: z.string().optional(),
});

const LicenseSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
});

const InfoSchema = z.object({
  title: z.string(),
  summary: z.string().optional(),
  termsOfService: z.string().optional(),
  description: z.string().optional(),
  contact: ContactSchema.optional(),
  license: LicenseSchema.optional(),
  version: z.string(),
});

const schemasSchema = z.object({
  type: z.string(),
  properties: z.record(z.unknown()),
  required: z.array(z.string()).optional(),
  example: z.unknown().optional(),
});

const ComponentsSchema = z.object({
  schemas: z.record(schemasSchema),
});

// TODO: complete definitions schema for openapi 2.0
// TODO: apply Record<string, unknown> to properties

// const DefinitionsSchema = z.record(
//   z.object({
//     type: z.string(),
//     properties: z.object({
//       code: z.object({
//         type: z.string(),
//       }),
//       type: z.object({
//         type: z.string(),
//       }),
//       message: z.object({
//         type: z.string(),
//       }),
//     }),
//   }),
// );

const openApiSchema = z.object({
  openapi: z.string().optional(),
  swagger: z.string().optional(),
  info: InfoSchema,
  components: ComponentsSchema.optional(),
  // TODO: complete definitions schema for openapi 2.0
  // definitions: DefinitionsSchema.optional(),
});

const evaluateInfo = (document:object): OpenApiObject => {
  const info = openApiSchema.safeParse(document);

  if (!info.success) {
    console.error(info.error.errors);
  }

  return info.data!;
};

export default evaluateInfo;
