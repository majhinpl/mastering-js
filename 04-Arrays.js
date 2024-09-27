let marks = [98, 85, 72, 65, 40];

let sum = 0;

for (let val of marks) {
  sum += val;
}

console.log(sum);

let average = sum / marks.length;
console.log(`average marks of the students is ${average}`);
