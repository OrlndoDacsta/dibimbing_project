const students = [
  { nama: "Andi", grade: 7.5 },
  { nama: "Ardi", grade: 9 },
  { nama: "Adi", grade: 7 },
  { nama: "Anang", grade: 6 },
  { nama: "Amir", grade: 8 },
];

const filtered = students.filter(item => item.grade > 7);
console.log(filtered);
