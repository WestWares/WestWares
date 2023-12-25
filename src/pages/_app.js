import { createContext, useState } from 'react';
import '../styles/styles.scss';

const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:8080/wares'); // Replace with API endpoint
    const data = await response.json();
    console.log('Data from API:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const CartContext = createContext();
const MyApp = ({ Component, pageProps }) => {
  const [cart, setCart] = useState([]);
  fetchData();
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
};

export default MyApp;
