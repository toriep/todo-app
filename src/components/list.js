import React from 'react';
import Item from './item';

const List = (props)=>{//functional components alwayss get props passed in

    const listElements = props.data.map((item,index)=>{
        return <Item key={item._id} item={item} delete={()=>props.delete(item._id)}/>//react uses the keys to index each element to keep track where each thing is in the list. We use id instead of index to prevent the the new item to get updated with the old styling. It can be any item that is unique to each item
    })

    return(
        <ul className="collection">
            {listElements}
        </ul>//you don't have to wrap everything in div
    );
}

export default List;