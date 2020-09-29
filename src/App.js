import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);
export default class App extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: 'raj',
       pass:'',
       issubmit: false,
     }
     this.handlechangeName = this.handlechangeName.bind(this);
     this.handlechangePassword = this.handlechangePassword.bind(this);
     this.submit = this.submit.bind(this);
  }
 handlechangeName (e) {
  this.setState({
    name: e.target.value
  });
}
handlechangePassword (e) {
  this.setState({
    pass: e.target.value
  });
}
 issubmit = false;
submit() {

}
render() {
  return (
<section className="container">
  <div className="box-container">
    <div className="controller"> loging</div>
    <input value={this.state.name} className="form" placeholder="UserName" type="text" onChange={this.handlechangeName}/>
    <input value={this.state.pass} className="form" placeholder="PassWord" type="password" onChange={this.handlechangePassword}/>
    <BrowserRouter>
    <Link to='/login' color="white"> Login</Link>
    </BrowserRouter>
    </div>
</section>
  );
}
}


