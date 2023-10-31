import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  class student extends React.Component{
    constructor(){
      console.log("construt.....");
      super()
      this.state={
        //name:purva
        product:[]
      }
    }
    static getDerivedStateFromProps(props,state) 
    {
      console.log("props",props);
      console.log("state",state);
      console.log("insert a dsfp");
      return null
    }
    componentDidMount()
    {
      console.log("inside componetdidmount");
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
      {
        product:json
      }
      console.log("product",this.product);
    }
    render()
    {
      console.log("its render.......");
      return(
        <>
        <h1>Hello</h1>
        </>
      )
    }
  }
  const [data,setData]=useState(0);

  const increment = () => {
    setData(data + 1);
  };
  const decrement = () => {
    setData(data - 1);
  };
  useEffect(()=> {
    alert("show my counter...")
  },[ ])
  return (
    <div className="App">
      <student myname="purva"></student>
      <button onClick={increment}>+</button>
      <p>Counter:{data}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default App;
