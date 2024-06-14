// src/contexts/CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (event, quantity) => {
//     setCart(prevCart => {
//       const existingItem = prevCart.find(item => item.event.id === event.id);
//       if (existingItem) {
//         return prevCart.map(item =>
//           item.event.id === event.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prevCart, { event, quantity }];
//       }
//     });
//   };

//   const removeFromCart = (eventId) => {
//     setCart(prevCart => prevCart.filter(item => item.event.id !== eventId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// src/contexts/CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (event, quantity) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.event.id === event.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.event.id === event.id ? { ...item, quantity: item.quantity + quantity } : item
//         );
//       } else {
//         return [...prevCart, { event, quantity }];
//       }
//     });
//   };

//   const removeFromCart = (eventId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.event.id !== eventId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// src/contexts/CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (event, quantity) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === event._id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === event._id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         return [...prevItems, { id: event._id, event, quantity }];
//       }
//     });
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (event, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === event._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === event._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { id: event._id, event, quantity }];
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

