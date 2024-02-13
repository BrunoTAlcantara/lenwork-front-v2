export const cpfFormater = (cpfNum: string) => {
    return cpfNum.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
export const telFormater = (telNum: string) => {
    return telNum.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
}
