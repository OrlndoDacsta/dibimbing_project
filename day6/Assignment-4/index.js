function displayStudents(data) {
    let result = '';
  
    for (let index = 0; index < data.students.length; index++) {
      const student = data.students[index];
      const [no, name, city, birthDate, hobbies] = student;
      const formattedBirthDate = formatBirthDate(birthDate);
  
      result += `# Siswa ${index + 1}\n`;
      result += `  - no: ${no}\n`;
      result += `  - nama: ${name}\n`;
      result += `  - tempat, tanggal lahir: ${city}, ${formattedBirthDate}\n`;
  
      // Cek apakah hobbies memiliki properti length
      if (hobbies && hobbies.length !== undefined) {
        // Jika length ada, anggap sebagai array dan konversi ke string
        let hobbiesString = '';
        for (let i = 0; i < hobbies.length; i++) {
          hobbiesString += hobbies[i];
          if (i < hobbies.length - 1) {
            hobbiesString += ', ';
          }
        }
        result += `  - hobi: ${hobbiesString}\n`;
      } else {
        // Jika tidak memiliki properti length, anggap sebagai string
        result += `  - hobi: ${hobbies}\n`;
      }
  
      result += '\n';
    }
  
    return result;
  }
  
  // Contoh penggunaan
  const studentsInfo = displayStudents(data);
  console.log(studentsInfo);
  