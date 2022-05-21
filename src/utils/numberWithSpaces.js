export default function numberWithSpaces(val) {
  if (val === null || val === undefined) {
    return null
  }
  return val.toLocaleString('ru-RU')
}
