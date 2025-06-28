import { validateValue } from "./validateValue";

test("Валидация значения", () => {
  expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
  test("Right value", () => {
    expect(validateValue(50)).toBe(true)
  })
  test("Lower value", () => {
    expect(validateValue(-50)).toBe(false)
  })
  test("Higher value", () => {
    expect(validateValue(150)).toBe(false)
  })
  test("Bottom corner value", () => {
    expect(validateValue(0)).toBe(true)
  })
  test("Top corner value", () => {
    expect(validateValue(100)).toBe(true)
  })
})
