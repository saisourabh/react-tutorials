import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutus from './Aboutus';
import Dashboard from './Dashboard';
import Sourabh from './Sourabh';
import Comment from './Comment'
 const Apple= function(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path ='/' element={<Sourabh/>   }/>
                <Route path ='/Dashboard' element={<Dashboard/>   }/>
                <Route path ='/Sourabh' element={<Sourabh/>   }/>
                <Route path ='/Aboutus' element={<Aboutus/>   }/>
                <Route path ='/Quit' element={<Sourabh/>   }/>
                <Route path ='/Comment' element={<Comment/>   }/>
                </Routes>
            </BrowserRouter>
        </div>

    )
 }
// Babel Converted
//  const Apple = function () {
//     return /*#__PURE__*/React.createElement("div", null, "There Hi", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Vasamsettio"), /*#__PURE__*/React.createElement("li", null, "Veera"), /*#__PURE__*/React.createElement("li", null, "Venkata"), /*#__PURE__*/React.createElement("li", null, "Lakshmi"), /*#__PURE__*/React.createElement("li", null, "Sai"), /*#__PURE__*/React.createElement("li", null, "Sourabh")));
//   };


 ReactDOM.render(
    <Apple />,
    document.querySelector('#root')
    
 )   