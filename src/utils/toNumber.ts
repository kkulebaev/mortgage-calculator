export default function toNumber(val: string) {
  return Number(val.replace(/[^\d]/g, ''))
}
