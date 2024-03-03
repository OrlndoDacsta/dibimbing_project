class Pegawai {
  constructor(nama,id,golongan,lahir) {
    this.id = id;
    this.nama = nama;
    this.golongan = golongan;
    this.lahir = lahir;

    getUsia(){
    return  ((Date.now() - new Date(lahir).getTime()) / 1000 ) / 31536000;
    }

    gajiPokok(){
        
        if(this.golongan === 1){
            return this.getUsia() < 40 ? 3500000 : 4500000
        }
        else if (this.golongan === 2){
            return this.getUsia() > 40 ? 5000000 : 6000000
        }
        return 0;
    }

    totalGaji(){
        return this.totalGaji;
    }
  }
}

let coba = new Pegawai ('01','nando', 1, "2000-01-05")
module.exports = index
// js get different date (in year)
// https://javascript.plainenglish.io/find-difference-between-dates-in-javascript-80d9280d8598

// // note 1 year = 31,536,000 seconds
// let tgl_lahir = '2001-08-17';
// let year = ( (Date.now() - new Date(tgl_lahir).getTime()) / 1000 ) / 31536000;
// console.log({year});

// class pegawai
// set id
// set nama
// set golongan
// set lahir
// method gaji pokok golongan

// dosen extends Pegawai
// set NIDN
// set tujungan pegawai dosen
// method tunjangan fungsional
// method total gaji Dosen =  method gaji pokok golongan + tujungan pegawai Dosen + tunjangan Fungsional

// nonDosen extends Pegawai
// set tujungan pegawai nonDosen
// method total gaji nonDosen = method gaji pokok golongan + tujungan pegawai nonDosen
