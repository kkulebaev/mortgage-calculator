export default function numberWithSpaces(val: number | null | undefined) {
  if (val === null || val === undefined) {
    return null
  }
  return val.toLocaleString()
}
