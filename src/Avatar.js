import React,{Component} from 'react';
import './Avatar.css';
import  Avatarlist from './Avatarlist'
import 'tachyons';


class Avatar extends Component {
   constructor(){
       super();
       this.state = {
           name : "Welcome to Avatar Wolrd !"
       }
   }
   
   namechange(){
       this.setState({
           name : "welcome to the CODEWORLD!"
       })
   }
    
    render() { 
        const avatarlist = [
            {
                id: 1,
                name: "tejal",
                work: "developer"
            },
            {
                id: 2,
                name: "maya",
                work: "codder"
            },
            {
                id: 3,
                name: "misha",
                work: "web developer"
            },
            {
                id: 4,
                name: "nisha",
                work: "designer"
            }
        ]
    
        const avatarlistcard = avatarlist.map( (avatarcard, i)=> {
            return <Avatarlist key={i} id={avatarlist[i].id}
                                name={avatarlist[i].name}
                                work={avatarlist.work} />
        })
        return (
            <div className="mainpage">
              <h1> {this.state.name} </h1>
                {avatarlistcard}
              <button onClick= { () => this.namechange() }> Subscribe </button>
            </div>
            );
    }
}

 
 
   
     
 

export default Avatar;