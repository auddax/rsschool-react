// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = 'AIzaSyAcD28mcYUpL2PMV4Rm1nx0HJnb5JJj4nU';
const url = `https://sheets.googleapis.com/v4/spreadsheets/19W3P5W8uXVw3XUseuqzn2l0phEZ_Yhx-nTbLNJfrj64/values/catalog?alt=json&key=${apiKey}`;

const getProducts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.values;
  } catch (error) {
    console.log('getProducts ', error);
    return null;
  }
};

export default getProducts;
