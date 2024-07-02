export default function numberWithSpaces(val: number) {
  return new Intl.NumberFormat('ru').format(val)
}
