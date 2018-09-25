import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    console.log('item props: ',props);
    return (
        <li className="collection-item row">
            <div className="col s8">
                <Link to={`/item/${props.item._id}`}>
                    {props.item.title}
                </Link>
                
            </div>
            <div className="col s4 right-align">
                <button onClick={props.delete} className="btn red darken-2">Delete</button>
                <button className="btn orange lighten-2">Edit</button>
            </div>
        </li>
    );
}
