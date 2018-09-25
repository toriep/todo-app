
import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import NavBtn from './nav_btn';

class Details extends Component {
  state = {
    item: {}
  }
  componentDidMount = () => {
    this.getToDoItem();
  }
  
  async getToDoItem(){
    const {itemID} = this.props.match.params;

    try{
      const resp = await axios.get(`${config.API_URL}/todos/${itemID + config.API_KEY}`);

      console.log('Response:', resp);
  
      this.setState({
        item: resp.data.todo,
      });
    }
    catch(err){
      this.setState({
        item: {}
      });
    }
  }

  render() {
    const {item} = this.state;

    if(!item){
      return <h1>Loading...</h1>
    }

    if(!item.title){
      return (
        <div>
          <h1 className="center">Item Details</h1>
          <NavBtn to="/" color="purple darken-2" text="Back To List" />
          <h2 className="center">No Item to Display</h2>
        </div>
      )
    }

    return (
      <div>
          <h1 className="center">Item Details</h1>
          <NavBtn to="/" color="purple darken-2" text="Back To List" />
          <h3 className="center">{item.title}</h3>
          <h5 className="center">{item.details}</h5>
      </div>
    );
  }
}

export default Details;
