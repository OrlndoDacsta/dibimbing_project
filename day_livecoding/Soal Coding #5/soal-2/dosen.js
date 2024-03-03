const Pegawai = require ('./index')

class Dosen extends Pegawai{
    constructor (id, nidn, nama, golongan,lahir)
    super(nama, id, golongan,lahir)
    this.nidn = nidn
}

tunjangan(){
    return 1500000
}

tunjanganFungsional(){
    return this.g
}