import 'materialize-css/dist/css/materialize.min.css'
import React,{Component} from 'react';
import AddItems from './add_item';
import List from './list';
import dummyListData from '../dummy_data/list_data';

class App extends Component{//the owner of the data is the only one that changes the data/controls the data. This is true across all languages
    state = {//state is a property of class. This defines the property
        list: []
    }

    componentDidMount(){//gets called as soon as the page loads
        this.getListData();
    }

    getListData(){
        // Call server to get data

        //wait for response, when resonse comes, use it the set state
        this.setState({//every time you call set state, render gets called again. Every time state changes or something get passed in, render method gets called
            list: dummyListData
        });
    }

    addItems = (item)=>{
        item._id = new Date().getTime();//this is what ppl use timestamp

        this.setState({
            list: [item, ...this.state.list]//adds all the item from the selected array and adds it to the current array
        })
    }

    render(){
        const {list} = this.state;

        return(
            <div className="container">
                <h1 className="center">To Do App</h1>
                <AddItems add={this.addItems}/>
                <List data={list}/>
            </div>
        );
    }
}

export default App;
