function pxToRem(number: number, baseNumber?: number) {
    return `${number / (baseNumber || 16)}rem`;
}

export default pxToRem;
