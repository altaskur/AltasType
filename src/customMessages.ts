import pc from 'picocolors';

const errorMessage = (message: string) => {
  const styledMessage = pc.red(`⛔ ${message}.`);
  console.log(styledMessage);
};

const alertMessage = (message: string) => {
  const styledMessage = pc.yellow(`⚠️  ${message}.`);
  console.log(styledMessage);
};

const successMessage = (message: string) => {
  const styledMessage = pc.green(`✅ ${message}.`);
  console.log(styledMessage);
};

const infoMessage = (message: string) => {
  const styledMessage = pc.blue(`🔵 ${message}.`);
  console.log(styledMessage);
};

const normalMessage = (message: string) => {
  const styledMessage = pc.white(`${message}.`);
  console.log(styledMessage);
};

export {
  errorMessage,
  alertMessage,
  infoMessage,
  successMessage,
  normalMessage,
};
