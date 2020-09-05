 import React,{Component} from 'react';
 import './Demo.css';
 
 
 class Demo extends Component {
     state = {  }
     render() { 
         return (
            <div className="maindiv">
              <h1>hello there {this.props.name} !!!!</h1>
              <p> whats going on ??</p>
            </div>  );
     }
 }
  
 export default Demo;