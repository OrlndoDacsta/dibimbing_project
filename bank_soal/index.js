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
  // Mengambil angka setelah kata "item"
  const numberA = parseInt(a.match(/\d+/)[0]);
  const numberB = parseInt(b.match(/\d+/)[0]);

  // Mengurutkan berdasarkan nomor
  return numberA - numberB;
});

console.log(data);
// Output: ["item 1", "item 3", "item 5", "item 11", "item 113", "item 158", "item 209", "item 2000"]
