export const getRandomFromArray = (arr) => arr[Math.abs(Math.floor(arr.length - Math.random() * arr.length))];

export const getNumRandom = (min, max) => Math.round(min + Math.random() * (max - min));