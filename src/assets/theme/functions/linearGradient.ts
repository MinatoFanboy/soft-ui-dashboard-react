const linearGradient = (color: string, colorState: string, angle: number = 130) => {
    return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
};

export default linearGradient;
