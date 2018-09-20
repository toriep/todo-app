import React from 'react';

class AddItems extends React.Component{
    state = {
        title: '',
        details: ''
    }

    handleAddItem = (event)=>{//fat arrow automatically binds "this" for you
        event.preventDefault();//what is this for again
        this.props.add(this.state)
        this.setState({//this clears the form
            title: '',
            details: ''
        })
    }

    render(){
        const{title,details} = this.state;//the only advantage of doign this is we dont have to type this.state all over again

        return(
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
        )
    }
}

export default AddItems;