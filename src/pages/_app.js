import { createContext, useState } from 'react';
import '../styles/styles.scss';

/*
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8080/wares'); // Replace with API endpoint
    const data = await response.json();
    console.log('Data from API:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};
*/

var callAPI = (firstName,lastName)=>{
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({"ID":firstName,"poopcolor":lastName});
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
  // make API call with parameters and use promises to get response
  fetch("https://ph2215gdq3.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
  .then(response => response.text())
  .then(result => alert(JSON.parse(result).body))
  .catch(error => console.log('error', error));
}

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  callAPI("2","Green"); // API CALL
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
};

export default MyApp;
