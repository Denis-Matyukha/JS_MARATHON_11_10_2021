export const getRandomFromArray = (arr) => {
    return arr[Math.abs(Math.floor(arr.length - Math.random() * arr.length))];
};

export const getNumRandom = (min, max) => {
    return Math.round(min + Math.random() * (max - min))
};