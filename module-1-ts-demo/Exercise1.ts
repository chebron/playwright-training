function calculateSquare(num: number): number {
    return num * num;
}

const num = 10;
const square = calculateSquare(num);
console.log(`The square of ${num} is ${square}`);

const calculateTriangleArea = (base: number, height: number): number => {
    return (base * height) / 2;
};

const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log(`The area of the triangle is ${area}`);