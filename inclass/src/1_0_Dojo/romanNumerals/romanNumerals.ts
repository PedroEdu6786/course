const romanNums = {
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

export const romanNumbers = (num: number) => {
  let result = ''
  for (let romanNum of Object.keys(romanNums)) {
    let quotient = Math.floor(num / romanNums[romanNum])
    result += romanNum.repeat(quotient)
    num -= quotient * romanNums[romanNum]
  }

  return result
}
