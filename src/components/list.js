import React,{Component} from 'react';
import Item from './item';
import NavBtn from './nav_btn';
import config from '../config';
import axios from 'axios';

class List extends Component{
    state = {
        list: [],
        error: '',
    }

    componentDidMount() {
        this.getListData();
    }

    getListData = async () =>{
        //Call server to get data
        //reponse builds a URL that looks like - http://api.reactprototypes.com/todos?key=somekey
        // if there is a promise, resolve it by using .then
        // const response = axios.get(`${BASE_URL}/todos${API_KEY}`).then( (response) => {
        //     const { todos } = response.data
        //     console.log('Todos:', todos)
        //     this.setState({
        //         list: todos
        //     });
        // });
        try {
            const response = await axios.get(`${config.API_URL}/todos${config.API_KEY}`);
            const { todos } = response.data;
            this.setState({
                list: todos,
            });
        } catch(err) {
            this.setState({
                error: 'Error retrieving list data',
            });
        }
    }

    deleteItem = async id => {//we need to be in the habit of not mutating the state. Why???

        await axios.delete(`${config.API_URL}/todos/${id + config.API_KEY}`)//the id is part of the url

        this.getListData();
    }

    render(){
        const {error,list} = this.state;

        const listElements = list.map((item,index)=>{
            return <Item key={item._id} item={item} delete={()=>this.deleteItem(item._id)}/>//react uses the keys to index each element to keep track where each thing is in the list. We use id instead of index to prevent the the new item to get updated with the old styling. It can be any item that is unique to each item
        })
    
        return(
            <div>
                <h1 className="center">To Do List</h1>
                <NavBtn to="/add-item" color="teal lighten-2" text="Add Item" />
                <p className="red-text text-darken-2">{error}</p>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        );
    }
}

export default List;