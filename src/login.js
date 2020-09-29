import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ChatItems from './ChatItems';
import './login.css';
// import {BrowserRouter, Link} from 'react-router-dom';
export default class login extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
         items: [],
         currentItems: {
            text: '',
            key:'',
         }
     }
     this.handlechangetext = this.handlechangetext.bind(this);
     this.addtext = this.addtext.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     this.setUpdate = this.setUpdate.bind(this);
  }
  handlechangetext(e) {
    this.setState({
        currentItems: {
            text: e.target.value,
            key: Date.now(),
        }
    });
  }
  addtext(e) {
      e.preventDefault();
      const newItem = this.state.currentItems;
      if (newItem.text !== '') {
          const newItems = [...this.state.items, newItem];
          this.setState({
              items: newItems,
              currentItems:{
                  text: '',
                }
         });
      }
  }
  deleteItem(key) {
    const filterItems = this.state.items.filter(item=>
        item.key !== key);
    this.setState({
        items: filterItems,
    })
  }
  setUpdate(text,key) {
      const items = this.state.items;
      items.map(item=>{
        if(item.key === key)
        {
            item.text = text;
        }
      })
      this.setState({
          items: items
      })
  }
render() {
  return (
    <div className="chat" >
        <header>
      <form id='to-do-form' onSubmit={this.addtext}>
          <input type="text" placeholder="Enter Text" value={this.state.currentItems.text} onChange={this.handlechangetext}/>
          <button type="submit">Add</button>
      </form>
      </header>
      <ChatItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      </div>
  );
}
}


