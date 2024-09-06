// Soft UI Dashboard React helper functions
import hexToRgb from './hexToRgb';

function rgba(color: string, opacity: number) {
    return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
