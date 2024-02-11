function segitiga(e) {
  for (let i = 0; i <= e; i++) {
    let asterik = "";
    for (let j = 0; j < e - i; j++) {
      asterik += " ";
    }
    for (let x = 0; x < i; x++) {
      asterik += "* ";
    }
    console.log(asterik);
    asterik = "";
  }
}

segitiga(5);
