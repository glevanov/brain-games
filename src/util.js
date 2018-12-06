const isEven = num => num % 2 === 0;

const getNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;

export { isEven, getNumber };
