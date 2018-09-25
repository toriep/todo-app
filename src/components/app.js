import 'materialize-css/dist/css/materialize.min.css'
import {Route} from 'react-router-dom';
import React,{Component} from 'react';
import AddItems from './add_item';
import List from './list';

class App extends Component{//the owner of the data is the only one that changes the data/controls the data. This is true across all languages


    render(){
        return(
            <div className="container">
                <Route path="/" exact component={List}/>

                <Route path="/add-item" component={AddItems}/>

            </div>
        );
    }
}

export default App;
