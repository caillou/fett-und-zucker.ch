export const fromEmail = '"Fett und Zucker" <hello@fett-und-zucker.ch>';
export const awsRegion = "eu-central-1";
export const projectName = "Fett und Zucker";
export const companyName = projectName; // For copyright ownership
export const emailLegalText =
  // TODO: decide on e-mail LEGAL_TEXT!
  // Envvar here so we can override on the demo website
  process.env.LEGAL_TEXT || "";
