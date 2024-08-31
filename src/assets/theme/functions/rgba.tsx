import hexToRgb from './hexToRgb';

const rgba = (color: string, opacity: number) => {
    return `rgba(${hexToRgb(color)}, ${opacity})`;
};

export default rgba;
