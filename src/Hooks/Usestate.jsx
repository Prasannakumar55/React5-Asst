import React, { useState } from 'react';
import './Use.css';

export default function Usestate1() {
    const [count, setCount] = useState(0);



    return (
        <>
    <div className="container">
    <h1>Higher order Components</h1> <br/>
    <h4> -->   A higher-Order Component (HOC) is an Advanced Technique in React for Reusing Component logic. <br/> <br/>
    -->    HOC is a pure function with zero side-effects and doesn't modify the actual input component. <br/> <br/>
    -->    Higher-Oredr component is a fuction that takes a component and returns a new component. <br/> <br/>
    -->    It take the component as input with some logic and return the some additional validation  of the component. <br/> <br/>
    -->    It used to copying the same logic in every component. it makes code easier and occupies less space</h4> <br/>


    <h2>Count : {count}</h2>
    <button className='Btn1' onClick={() => { setCount(count + 1) }}>Increase</button>
    <button className='Btn2' onClick={() => { setCount(count - 1) }}>Decrease</button>
    </div>  <br/>
    
    <div className="container">
        <h1>Pure Components</h1> <br/>

        <h4>-->     A pure class component is a function that always returns the same result. <br/> <br/>
            -->     The best example for the pure functions are Props the props are used to bring the data <br/> <br/>
                    from one component to another component without modify the data.</h4>

    </div>
    </>


    )
}
 