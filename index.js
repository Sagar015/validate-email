"use strict";
// Email Regular expression
var regex = /^[A-Za-z0-9]+?((\.{1})[A-Za-z0-9]+|[A-Za-z0-9]*)@([A-Za-z0-9]{1,2}|[A-Za-z0-9]((?!(\.))[A-Za-z0-9.-])+[A-Za-z0-9])\.[A-Za-z]{2,}$/i;

// validates the email id synchronously
function validate(email) {
  return regex.test(email);
}

// validates the email id asynchronously
function validateAsync(email, callback) {
  validate(null, validator.validate(email));
}

var validator = {
  validate: validate,
  validateAsync: validateAsync
};

module.exports = validator;