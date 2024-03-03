class Ayah {
    constructor(name) {
      this.name = name;
    }
  
    getNameSeparator() {
      return "-";
    }
  }
  
  class Anak extends Ayah {
    constructor(name, index) {
      super(name);
      this.index = index;
    }
  
    getFullName() {
      return this.name + this.getNameSeparator() + this.index;
    }


  }
  
  const firstFooBar = new Anak("foo", 5);
  
  // Anak = {nama: '', index: '', getFullName: ''}
  
  console.log(firstFooBar.name);
  // Expected output: "foo"
  
  console.log(firstFooBar.getFullName());
  // Expected output: "foo-1"