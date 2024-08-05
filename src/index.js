import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


// import Namess from './App';
// import InlineCss from './component/inlineCss';
// import ExternalCss from './component/externalCss'
// import Usestate from './component/UseState';
// import StateClassComponent from './component/UseState-ClassComponent'
// import ArrayObject from './component/ArrayObject';
// import UseEffect from './component/useEffect';

// import LearnState from './component/LearnState';


// 

import {LearnComponent, LearnComponents }   from './Component1/Learn_Component';
import LearnUseEffect from './Component1/LearnUseEffect';
import { LearnUseState } from './Component1/LearnUseState';

import LearnUseRef from './Component1/LearnUseRef'
import { LearnUseRef2 } from './Component1/LearnUseRef2';
// import { Nav } from './component2/Nav';

import UseMemo from './Component1/UseMemo';
import LearnUseCallBack from './Component1/LearnUseCallBack';
// import {LearnUseReducer, UseReducerFunction} from './Component1/LearnUseReducer';
import LearnUseReducer from './Component1/LearnUseReducer';
import LearnUseReducer1 from './Component1/LearnUseReducer1';
import LearnRouter from './Component1/LearnRouter';




const root = ReactDOM.createRoot(document.getElementById('root'));






root.render(
 
 
   <React.StrictMode>
     
     <LearnComponent/>
     <LearnComponents/>
     <LearnUseEffect/>
     <LearnUseState/>
     <LearnUseRef/>
     <LearnUseRef2/>
     <UseMemo/>
     <LearnUseCallBack/>
     <LearnUseReducer/>
     <LearnUseReducer1/>
     <LearnRouter/>
     
   </React.StrictMode>

   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
