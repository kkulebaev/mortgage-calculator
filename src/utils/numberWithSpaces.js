export default function numberWithSpaces(val) {
  if (val === null || val === undefined) {
    return null
  }
  const number = Number(val.replace(/\s/g, ''))
  return number.toLocaleString('ru-RU')
}
