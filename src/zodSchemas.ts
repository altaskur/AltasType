/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

export interface OpenApiObject {
  openapi: string;
  info: any;
  components?: {
    schemas: any;
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

const openApiSchema = z.object({
  openapi: z.string(),
  info: InfoSchema,
  components: ComponentsSchema.optional(),
});

const evaluateInfo = (document: { info: unknown }): OpenApiObject => {
  const info = openApiSchema.safeParse(document);

  if (!info.success) {
    console.error(info.error.errors);
  }

  return info.data!;
};

export default evaluateInfo;
