const apiKey = process.env.REACT_APP_API_KEY;
const url = `https://sheets.googleapis.com/v4/spreadsheets/1uBjBThvJR6Eweme8Kd66GKbWmH9oh42Tbf_qKD0qkmQ/values/catalog?alt=json&key=${apiKey}`;

const getProducts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('getProducts ', error);
    return null;
  }
};

export default getProducts;
