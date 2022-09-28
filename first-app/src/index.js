import React from 'react';
import ReactDOM from 'react-dom';

 const App= function(){
    return (
        <div>Hi Thereh!</div>
    )
 }
 const Apple= function(){
    return (
        <div>There Hi
          <ul>
            <li>Vasamsetti</li>
            <li>Veera</li>
            <li>Venkata</li>
            <li>Lakshmi</li>
            <li>Sai</li>
            <li>Sourabh</li>
          </ul>
        </div>
    )
 }
// Babel Converted
//  const Apple = function () {
//     return /*#__PURE__*/React.createElement("div", null, "There Hi", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Vasamsettio"), /*#__PURE__*/React.createElement("li", null, "Veera"), /*#__PURE__*/React.createElement("li", null, "Venkata"), /*#__PURE__*/React.createElement("li", null, "Lakshmi"), /*#__PURE__*/React.createElement("li", null, "Sai"), /*#__PURE__*/React.createElement("li", null, "Sourabh")));
//   };

 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 )
 ReactDOM.render(
    <Apple />,
    document.querySelector('#root')
    
 )   