const Validator = require('validatorjs')
const ApiException = require('../utils/ApiException')

/**
 * @param {*} data {
 *  - email
 *  - password
 *  - password_confirm:
 * }
 *
 * @returns Validator
 */
const createBookValidator = (data) => {
  const rules = {
    title: 'required',
    description: 'required',
    price: 'required|numeric|min:1',
    author: 'required',
    datePublished: 'required'
  }

  let validator = new Validator(data, rules)

  if (validator.fails()) {
    throw new ApiException({
      message: 'There were errors with the validation',
      status: 'failed',
      code: 400,
      data: null,
      errors: validator.errors.errors
    })
  }

  return validator
}

module.exports = createBookValidator
