export function roundToTwoDecimals(n: number) {
  return Math.round((n + Number.EPSILON) * 100) / 100
}
