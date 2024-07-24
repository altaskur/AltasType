import { z } from 'zod';

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

const evaluateInfo = (document: { info: unknown }): void => {
  const info = InfoSchema.safeParse(document);

  if (!info.success) {
    throw new Error(info.error.errors[0].message);
  }
};

export default evaluateInfo;
