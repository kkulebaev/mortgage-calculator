export default function roundNumber(number: number, digits = 2) {
  const multiple = Math.pow(10, digits)
  const rndedNum = Math.round(number * multiple) / multiple
  return rndedNum
}
