import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }
const anotherUser = "chai aur react"

const anotherElement = (
    <a href="https://google.com" target='blank'>Visit Google</a>
)

const ReactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  'click Me to Visit Google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
  ReactElement
  // </React.StrictMode>
);
