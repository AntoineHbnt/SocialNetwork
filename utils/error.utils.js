module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déjà pris";
  if (err.message.includes("email")) errors.email = "Email incorrect";
  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caractère minimum";

  if (err.code === 11000) errors.email = "Cet email est déjà utilisé";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe est incorrect";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let erros = {format: '', maxSize: ''};

  if(err.message.includes('invalid file'))
    errors.format = "Format incompatiblie";

  if(err.message.includes('max size'))
    errors.maxSize = 'Le fichier dépasse 500ko';

  return errors

  return errors
}
