const calcHp = (baseHp: number, effortValue: number, level: number) => {
    const individualValue = Math.random() * 32

    return Math.floor(0.01 * (2 * baseHp + individualValue + Math.floor(0.25 * effortValue)) * level) + level + 10;
}

const calcStat = (baseValue: number, effortValue: number, level: number) => {
    const individualValue = Math.random() * 32
    return Math.floor(0.01 * (2 * baseValue + individualValue + Math.floor(0.25 * effortValue)) * level) + 5;
}

export {
    calcHp,
    calcStat
}