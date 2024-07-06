import {
  alertMessage, errorMessage, infoMessage, normalMessage, successMessage,
} from './customMessages';
import showWelcomeMessage from './welcomeMessage';

showWelcomeMessage();

errorMessage('This is an error message');
alertMessage('This is an alert message');
successMessage('This is a success message');
infoMessage('This is an info message');
normalMessage('This is a normal message');
