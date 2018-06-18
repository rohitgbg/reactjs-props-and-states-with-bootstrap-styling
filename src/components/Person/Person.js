import React from 'react';

const person = (props) =>{
    return (
        <div className="alert alert-dismissible alert-success"> 
            <p onClick={props.click}>  Hi, I'm {props.name} and {props.age} year's old</p>
            <div className="form-group">
                <input type="text" onChange={props.changed} className="form-control" placeholder="Enter name..." id="inputDefault" />
            </div>
        </div> 
    )
}
export default person;
