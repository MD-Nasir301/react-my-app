import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const roll = [1,2,3,4,5,6,7,8,9,10];
  const products = [
    {name:"Photoshop", prize:"$200"},
    {name:"Illustator", prize:"$330"},
    {name:"Premium Pro", prize:"$650"},
  ]

  return (
    
    <div className="App">
      <header className="App-header">
      <h3>Product list</h3>
      <Counter></Counter>
        
        
        {/* <Myfun product={products[0]} ></Myfun>
        <Myfun product={products[1]} ></Myfun>
        <Myfun product={products[2]} ></Myfun> */}

        {
          products.map(pd => <Myfun product={pd}></Myfun>)
          
        }
        
        {
          roll.map(r => <Roll ro = {r}> </Roll>  )
        }
        
      </header>
    </div>

  );
}
function Myfun (props){
  console.log(props);
  const sty = {
    border:'1px solid yellow',
    padding: '10px',
    margin: '10px',
    background: 'gray',
    width: '400px',
    textAlign: 'left',
    float: 'left'
  }
  
  const {name , prize} = props.product;

  return ( 

    <div  style={sty} className="container">
     <h3>Name: {name} </h3>
     <h4>Prize: {prize} </h4>

    </div>

  )
}
function Roll (props) {
  
  return (
    <li>ROLL: {props.ro} </li>
  )
}

function Counter (){
  
  const [count, setCount] = useState(520);
  return (
    <div>
    <button onClick = {() => setCount (count+1)}> Click</button>
    <h3 >Count: {count}</h3>
    </div>
  )
  
  }



    export default App;


