import React from 'react';
import ReactDOM from 'react-dom';

 const App= function(){
    return (
        <div>Hi Thereh!</div>
    )
 }
 const Apple= function(){
    return (
        <div>There Hi</div>
    )
 }


 ReactDOM.render(
    <App />,
    document.querySelector('#root')
 )
 ReactDOM.render(
    <Apple />,
    document.querySelector('#root')
    
 )   