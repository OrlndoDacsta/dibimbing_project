// 4.Async Await :
// URL API: https://6582c47102f747c8367a2854.mockapi.io/api/v1/movies 

async function getMovies() {
    try {
      const response = await fetch(
        "https://6582c47102f747c8367a2854.mockapi.io/api/v1/movies"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed get data");
    }
  }
  async function getDataMov() {
    const dataMovies = await getMovies();
    console.log(dataMovies);
  }
  
getDataMov()