const eggLang = require('./12_language')

const set = function (args, env) {
  if (args.length !== 2 || args[0].type !== 'word') {
    throw new SyntaxError('Invalid syntax')
  }
  const name = args[0].name
  const value = eggLang.evaluate(args[1], env)

  let scope = env
  while (scope) {
    if (Object.prototype.hasOwnProperty.call(scope, name)) {
      scope[name] = value
      return value
    } else {
      scope = Object.getPrototypeOf(scope)
    }
  }
  throw new ReferenceError(`Unknown variable ${name}`)
}

module.exports = {
  set: set
}
