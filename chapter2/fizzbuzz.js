function fizzbuzz (n) {
  let lines = []
  for (let i = 1; i <= n; i++) {
    let divBy3 = i % 3 === 0
    let divBy5 = i % 5 === 0
    if (divBy3 && divBy5) {
      lines.push('FizzBuzz')
    } else if (divBy3) {
      lines.push('Fizz')
    } else if (divBy5) {
      lines.push('Buzz')
    } else {
      lines.push(String(i))
    }
  }
  return lines
}

module.exports = {
  fizzbuzz: fizzbuzz
}
