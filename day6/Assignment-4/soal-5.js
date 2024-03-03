// 5. PrintDataSiswa
// [INSTRUCTIONS]
// PrintDataSiswa adalah function yang dibuat untuk menampilkan data siswa sesuai dengan output yang ditentukan

const data = {
  students: [
    [
      "0001",
      "Ade Alamsyah ",
      "Jakarta",
      "21/05/2000",
      ["Membaca", "melukis", "menari"],
    ],
    ["0002", "Roman Alamsyah ", "Bandung", "15/01/1996", "Sepak bola"],
    [
      "0003",
      "Ira Alamsyah ",
      "Bandar Lampung",
      "01/08/1999",
      ["Memasak", "berkebun"],
    ],
  ],
  total: 3,
};

const formatBirth = (birth) => {
  const day = birth[0] + birth[1];
  const month = birth[3] + birth[4];
  const year = birth[6] + birth[7] + birth[8] + birth[9];

  let monthNames;
  switch (month) {
    case "01":
      monthNames = "Januari";
      break;
    case "02":
      monthNames = "Februari";
      break;
    case "03":
      monthNames = "Maret";
      break;
    case "04":
      monthNames = "April";
      break;
    case "05":
      monthNames = "Mei";
      break;
    case "06":
      monthNames = "Juni";
      break;
    case "07":
      monthNames = "Juli";
      break;
    case "08":
      monthNames = "Agustus";
      break;
    case "09":
      monthNames = "September";
      break;
    case "10":
      monthNames = "Oktober";
      break;
    case "11":
      monthNames = "November";
      break;
    case "12":
      monthNames = "Desember";
      break;
    default:
      monthNames = "Invalid Month";
  }
  return `${day} ${monthNames} ${year}`;
};


const PrintDataSiswa = (siswa) => {
  let result = ""

  for (let i = 0; i < siswa.students.length; i++){
    const student = siswa.students[i];
    const [no, name, born, birthDate, hobbies] = student;
    const formattedBirthDate = formatBirth(birthDate);

    result += `# Siswa ${i + 1}\n`;
    result += `  - no: ${no}\n`;
    result += `  - nama: ${name}\n`;
    result += `  - tempat, tanggal lahir: ${born}, ${formattedBirthDate}\n`;

    if (Array.isArray(hobbies)) {
      result += `  - hobi: ${hobbies.join(", ")}\n`;
    } else {
      result += `  - hobi: ${hobbies}\n`;
    }

    result += '\n';
  }

  return result;
}

console.log(PrintDataSiswa(data));

  
// OUTPUT
// # Siswa 1
//  - no: 0001
//  - nama: Ade Alamsyah
//  - tempat, tanggal lahir: Jakarta, 21 Mei 2000"
//  - hobi: membaca, melukis, menari

//  # Siswa 2
//  - no: 0001
//  - nama: Roman Alamsyah
//  - tempat, tanggal lahir: Bandung, 15 Januari 2000"
//  - hobi: Sepak bola

// # Siswa 3
//  - no: 0001
//  - nama: Ira Alamsyah
//  - tempat, tanggal lahir: Bandar Lampung, 21 Agustus 2000"
//  - hobi: Memasak, berkebun
