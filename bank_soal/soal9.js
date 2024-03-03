let data = [
  "item 209",
  "item 1",
  "item 5",
  "item 113",
  "item 11",
  "item 158",
  "item 2000",
  "item 3",
];

data.sort((a, b) => {
// Mengambil angka setelah kata item
  const num1 = parseInt(a.match(/\d+/)[0]);
  const num2 = parseInt(b.match(/\d+/)[0]);

  return num1 - num2;
});

console.log(data);
