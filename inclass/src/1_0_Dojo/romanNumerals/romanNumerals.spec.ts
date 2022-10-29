import { romanNumbers } from './romanNumerals'

describe('Testing roman numerals conversion', () => {
  it('should return empty string if 0', () => {
    expect(romanNumbers(0)).toBe('')
  })
  it('should return I if 1', () => {
    expect(romanNumbers(1)).toBe('I')
  })
  it('should return II if 2', () => {
    expect(romanNumbers(2)).toBe('II')
  })
  it('should return IV if 4', () => {
    expect(romanNumbers(4)).toBe('IV')
  })
  it('should return V if 5', () => {
    expect(romanNumbers(5)).toBe('V')
  })
  it('should return VI if 6', () => {
    expect(romanNumbers(6)).toBe('VI')
  })
  it('should return VIII if 8', () => {
    expect(romanNumbers(8)).toBe('VIII')
  })
  it('should return X if 10', () => {
    expect(romanNumbers(10)).toBe('X')
  })
  it('should return XI if 11', () => {
    expect(romanNumbers(11)).toBe('XI')
  })
  it('should return XIV if 14', () => {
    expect(romanNumbers(14)).toBe('XIV')
  })
  it('should return XV if 15', () => {
    expect(romanNumbers(15)).toBe('XV')
  })
  it('should return XV if 18', () => {
    expect(romanNumbers(18)).toBe('XVIII')
  })
  it('should return XIX if 19', () => {
    expect(romanNumbers(19)).toBe('XIX')
  })
  it('should return XX if 20', () => {
    expect(romanNumbers(20)).toBe('XX')
  })
  it('should return XXXIX if 39', () => {
    expect(romanNumbers(39)).toBe('XXXIX')
  })
  it('should return L if 50', () => {
    expect(romanNumbers(50)).toBe('L')
  })
  it('should return LXVIII if 68', () => {
    expect(romanNumbers(68)).toBe('LXVIII')
  })
  it('should return XC if 90', () => {
    expect(romanNumbers(90)).toBe('XC')
  })
  it('should return XCIX if 99', () => {
    expect(romanNumbers(99)).toBe('XCIX')
  })
  it('should return C if 100', () => {
    expect(romanNumbers(100)).toBe('C')
  })
})
