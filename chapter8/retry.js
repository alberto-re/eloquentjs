class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply (m, n) {
  if (Math.random() < 0.2) {
    return m * n
  } else {
    throw new MultiplicatorUnitFailure()
  }
}

function wrapPrimitiveMultiply (m, n) {
  for (;;) {
    try {
      return primitiveMultiply(m, n)
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        console.log(e)
        throw e
      }
    }
  }
}

module.exports = {
  wrapPrimitiveMultiply: wrapPrimitiveMultiply
}
