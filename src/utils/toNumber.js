export default function toNumber(val) {
  return Number(val.replace(/[^\d]/g, ''))
}
