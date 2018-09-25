import React from 'react';
import NavBtn from './nav_btn';
import axios from 'axios';
import config from '../config';

class AddItems extends React.Component{
    state = {
        title: '',
        details: ''
    }

    handleAddItem = async (event)=>{//fat arrow automatically binds "this" for you
        event.preventDefault();//what is this for again

        // addItems = async (item)=>{//tell JS that there will be asyn functionality in this fn. This would automatically reutnr a promise
        await axios.post(`${config.API_URL}/todos${config.API_KEY}`, this.state);//you don't use .then bc you already use async await. It's like the code pauses right here

        this.props.history.push('/');//take you back to home wit the passed in route
    }

    render(){
        const{title,details} = this.state;//the only advantage of doign this is we dont have to type this.state all over again

        console.log('Add Props: ',this.props);

        return(
            <div>
                <h1 className="center">Add To Do Item</h1>
                <NavBtn to="/" text="Back to List" color="pink lighten-3" />
                <form onSubmit={this.handleAddItem}>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <label>Title</label>
                            <input onChange={(e)=>this.setState({title: e.target.value})} 
                            type="text" 
                            value={title}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <label>Details</label>
                            <input onChange={({target})=>this.setState({details:target.value})}//you can destructure stuff in your paramter
                            type="text" 
                            value={details}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 offset-s3 right-align">
                        <button className="btn teal lighten-2">Add item</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddItems;