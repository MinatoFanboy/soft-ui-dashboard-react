function linearGradient(color: string, colorState: string, angle?: number) {
    return `linear-gradient(${angle || 310}deg, ${color}, ${colorState})`;
}

export default linearGradient;
