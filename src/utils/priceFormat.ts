export function krwPriceFormat(price: number): string {
    return new Intl.NumberFormat('ko', { style: 'currency', currency: 'KRW' }).format(price) + ' 원';
}

export function Percent(float: number): string {
    return (float * 100).toFixed(2) + '%'
}