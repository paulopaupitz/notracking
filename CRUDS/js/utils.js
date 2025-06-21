export function inverterData(isoDate) {
  const [ano, mes, dia] = isoDate.split('-');
  return `${dia}/${mes}/${ano}`;
}
export function printDiv() {
  window.print();
}

