import 'materialize-css/dist/css/materialize.min.css'
import React,{Component} from 'react';
import axios from 'axios';
import AddItems from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';

const BASE_URL = 'http://api.reactprototypes.com'//what's the point of doing this again
// const API_KEY = '?key=c618_demouser'
const API_KEY = '?key=thisisdefinitelyunique'

class App extends Component{//the owner of the data is the only one that changes the data/controls the data. This is true across all languages
    state = {//state is a property of class. This defines the property
        list: [],
        error: ''
    }

    componentDidMount(){//gets called as soon as the page loads
        this.getListData();
    }

    async getListData() {
        try {
            const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

            if (!resp.data.success) {
                throw new Error('Something went wrong');
            }

            this.setState({
                list: resp.data.todos
            })
        } catch (err) {
            console.log('Error message:', err.message)
            this.setState({
                error: 'Error retrieving list data'
            })
        }

             // const resp = axios.get(`${BASE_URL}/todos/${API_KEY}`).then((resp)=>{
        //     //wait for response, when response comes, use it the set state
        //     this.setState({//every time you call set state, render gets called again. Every time state changes or something get passed in, render method gets called
        //         list: resp.data.todos
        //     });
        // }).catch((err)=>{
        //     console.log('Get List Data Error:',err.message);//if you don't care if it's sucessful or not, just use .catch
        //     this.setState({
        //         error: 'Error retrieving list data'
        //     })
        // });

        // console.log('Axios Return Value:', resp);

    }

    addItems = async (item)=>{//tell JS that there will be asyn functionality in this fn. This would automatically reutnr a promise
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);//you don't use .then bc you already use async await. It's like the code pauses right here
    
        this.getListData();
    }

    deleteItem = async id => {//we need to be in the habit of not mutating the state. Why???
        console.log('Delete Item ID: ', id);

        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`)//the id is part of the url

        this.getListData();
    }

    render(){
        const {list,error} = this.state;

        console.log('List', list);

        return(
            <div className="container">
                <h1 className="center">To Do App</h1>
                <AddItems add={this.addItems}/>
                <p className="red-text">{error}</p>
                <List data={list} delete={this.deleteItem}/>
            </div>
        );
    }
}

export default App;
