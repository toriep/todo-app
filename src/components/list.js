import React,{Component} from 'react';
import dummyListData from '../dummy_data/list_data';

class List extends Component{
    state = {//state is a property of class. This defines the property
        list: []
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        // Call server to get data

        //wait for response, when resonse comes, use it the set state
        this.setState({//every time you call set state, render gets called again. Every time state changes or something get passed in, render method gets called
            list: dummyListData
        });
    }

    render(){

        const listElements = this.state.list.map((item,index)=>{
            return <li className="collection-item" key={item._id}>{item.title}</li>//react uses the keys to index each element to keep track where each thing is in the list. We use id instead of index to prevent the the new item to get updated with the old styling. It can be any item that is unique to each item
        })
    
        return(
            <ul className="collection">
                {listElements}
            </ul>//you don't have to wrap everything in div
        );
    }
};

export default List;