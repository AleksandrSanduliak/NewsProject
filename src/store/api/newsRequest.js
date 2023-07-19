import axios from "axios";

export const getDataNews = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-07-10&to=2023-07-10&sortBy=popularity&"
      + 'apiKey=' + import.meta.env.VITE_API_KEY
    );
    return response
  } catch (e) {
    console.log(e.message)
  }

};