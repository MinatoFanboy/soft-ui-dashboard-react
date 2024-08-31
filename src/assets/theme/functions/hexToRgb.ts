import chroma from 'chroma-js';

const hexToRgb = (color: string) => {
    return chroma(color).rgb().join(', ');
};

export default hexToRgb;
