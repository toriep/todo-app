import 'materialize-css/dist/css/materialize.min.css'
import {Route,Switch} from 'react-router-dom';
import React,{Component} from 'react';
import AddItems from './add_item';
import List from './list';
import Details from './details';
import NotFound from './not_found'

class App extends Component{//the owner of the data is the only one that changes the data/controls the data. This is true across all languages


    render(){
        return(
            <div className="container">
                <Switch>
                    <Route path="/" exact component={List}/>
                    <Route path="/add-item" component={AddItems}/>
                    <Route path="/item/:itemID" component={Details} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
