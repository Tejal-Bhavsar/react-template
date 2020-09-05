import React from 'react';
const Avatarlist = (props)=> {
    return(
        <div className="avatar ma4 bg-light-blue dib pa3 grow">
            <img src="https://api.adorable.io/avatars/285/abott@adorable" alt="avatar"></img>
            <h1 className="">{props.name}</h1>
            <p> {props.work} </p>
        </div>
    )
}
export default Avatarlist;