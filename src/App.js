function App()
{
  if(true)
  {
    var v=100
    let l=200
    const c=300
    v++;
    l++;
    console.log("let:"+1);
  
  }
  return(
    <>
    <h1>variable : global : {v}</h1>
    <h1>does not work let and come : because local</h1>
    </>
  )
}
export default App



/*function App()



{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    document.getElementById("res").innerHTML=`<h2>total:${tot}</h2>`;
  }
return(<>
  <h2>Arrow function withparameter</h2>
  <button onClick={()=>myfun(10,20,30)}>click me</button>
  <div id="res"></div>
</>)
}
export default App

/*function App()
{
let myfun=()=>{
    document.getElementById("res").innerHTML="congrats you clicked on the button";
  }
return(<>
  <h2>Arrow function without parameter</h2>
  <button onClick={myfun}>click me</button>
  <div id="res"></div>


</>)

export default App


/*import myimg from './images/5.jpg'
function App()
{
  return(<>
  <h2>image demo using path as expression</h2>
  <img src={myimg} width="50%" height="auto" alt="path is wrong"></img>
  
  
  
  </>



  )
}
export default App






/*function App()
{
  var a=300
  var b=200
  var c=400
  return(
    <>
    <h1>biggest amoung 3 no's </h1>
    <h1>biggest number a or b :{a>b?a:b}</h1>
    <h1>biggest number a or b or c:{(a>b && a>c) ?a:(b>c?b:c)}</h1>

    </>

  )
}
export default App








/*function App()
{
  var a=100
  var b=200
  return(
    <>
    <h2>biggest among 2 no's using conditional or ternary operator</h2>
    <h1>biggest number:{a>b?a:b}</h1>
    </>

  )
}
export default App





/*function App()


{
  var a=10
  var b=20
  var c="sharmila"
  return(
    <>
    <h1>total:{a+b}</h1>
    <marquee bgcolor='lightgreen'><font size='7'>{c}</font></marquee>
  </>)

}



export default App



/*import React from "react";
class Parent extends React.Component
{
  render()
    {
      return(
        <>
       
        <h1>this is</h1>
         <h1>this is parent class</h1>
          <h1>this is parent class</h1>
</>)
    }
  }

class App extends React.Component
{
  render()
  {
    return(
      <>
      <Parent/>
      <h1>welcome to js</h1>
      <h1>using react js</h1>
</>
    )
  }
}
         
export default App*/






/*function App(){
    return(
    <div>
    <h1>welcome to react js</h1>
     <h1>welcome to react js</h1>
      <h1>welcome to react js</h1>
      </div>
  )
     
  
}
export default App*/


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
