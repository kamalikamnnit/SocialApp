
// import React from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import FetchNews from './FetchNews'; // Import the FetchNews component

// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#00bfff',
//   headerFontColor: '#fff',
//   headerFontSize: '15px',
//   botBubbleColor: '#00bfff',
//   botFontColor: '#fff',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };


// const mystyle ={
//     Container {
//         position= "fixed",
//         bottom= "20px",
//         right= "20px"
//       }
      
// }
// const steps = [
//   {
//     id: '1',
//     message: 'Hi! How can I help you today?',
//     trigger: 'user-input',
//   },
//   {
//     id: 'user-input',
//     user: true,
//     trigger: 'fetch-news',
//   },
//   {
//     id: 'fetch-news',
//     component: <FetchNews />,
//     asMessage: true,
//     trigger: 'more-help',
//   },
//   {
//     id: 'more-help',
//     message: 'Do you need more help?',
//     trigger: 'more-help-options',
//   },
//   {
//     id: 'more-help-options',
//     options: [
//       { value: 'yes', label: 'Yes', trigger: 'user-input' },
//       { value: 'no', label: 'No', trigger: 'end' },
//     ],
//   },
//   {
//     id: 'end',
//     message: 'Okay, have a great day!',
//     end: true,
//   },
// ];

// const Chatbot = () => (
//   <ThemeProvider theme={theme}>
//     <ChatBot  steps={steps}  style = {mystyle}/>
//   </ThemeProvider>
// );

// export default Chatbot;
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import FetchNews from './FetchNews'; // Import the FetchNews component

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#00bfff',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00bfff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const mystyle = {
  botMessageBox: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
};

const steps = [
  {
    id: '1',
    message: 'Hi! How can I help you today?',
    trigger: 'user-input',
  },
  {
    id: 'user-input',
    user: true,
    trigger: 'fetch-news',
  },
  {
    id: 'fetch-news',
    component: <FetchNews />,
    asMessage: true,
    trigger: 'more-help',
  },
  {
    id: 'more-help',
    message: 'Do you need more help?',
    trigger: 'more-help-options',
  },
  {
    id: 'more-help-options',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'user-input' },
      { value: 'no', label: 'No', trigger: 'end' },
    ],
  },
  {
    id: 'end',
    message: 'Okay, have a great day!',
    end: true,
  },
];

const Chatbot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} botStyle={mystyle} />
  </ThemeProvider>
);

export default Chatbot;
