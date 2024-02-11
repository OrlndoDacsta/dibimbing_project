/**
 * counter "yes"
 *
 * input terminal adalah "yes" / "no"
 *
 * output adalah angka dari berapa kali jumlah "yes"
 *
 * tips: ini menggunakan infinity looping & break
 */

const prompt = require("prompt-sync")();

for (let i = 0; i => 5; i++) {
  const input = prompt("continue (yes) / berhenti (no) ? ");

  if (input == "no") {
    console.log(`Anda menginput "yes" sebanyak ${i} kali`);
    break;
  }
}
