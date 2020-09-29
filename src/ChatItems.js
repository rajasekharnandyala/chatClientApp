import React from 'react';
import './ChatItems.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
function ChatItems(props) {
const items = props.items;
const listItems = items.map(item=>{
    return <div className="list" key={item.key}><p><input type="text" value={item.text} onChange={(e)=>{
        props.setUpdate(e.target.value, item.key)
    }}/>    <span>
    <FontAwesomeIcon className="faicons" icon="trash" onClick= {() => props.deleteItem(item.key)}/></span></p>
</div>
}); 
return (
 <div>
     <FlipMove duration={200} easing='ease-in-out'>{listItems}
     </FlipMove>
     </div>
)
}
export default ChatItems;