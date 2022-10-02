import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import propic1 from "./images/profilepic1.jpg"
import propic2 from "./images/profilepic2.jpg"
import propic3 from "./images/profilepic3.jpg"
import UserCard from './UserCard';
 const App= function(){
    return (
        <div className='ui comments'>
            <UserCard > 
                My name is someone
            </UserCard>
            <UserCard > 
                <SingleComment 
                name="Babloo" 
                date="Today at 5:00PM"
                text="Happy New year"
                picture={propic1}/>
             </UserCard>
             <UserCard > 
             <SingleComment 
             name="Sourabh" 
             date="Today at 6:00PM"
             text="Happy Pongal"
             picture={propic2}/>
             </UserCard > 
             <UserCard > 
            <SingleComment 
             name="Sai" 
             date="Today at 7:00PM"
             text="Happy Christmas"
             picture={propic3}/>
             </UserCard >  


             
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