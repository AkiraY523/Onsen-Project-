import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, ListItem, Modal} from 'react-onsenui';
import {notification} from 'onsenui';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      emailAddress:'',
      password:'',
      confirmPassword:'',
      isOpen:false
    };
  }

  alertPopup() {
    notification.alert('Submit Success');
  }
  modalPopup() {
    notification.alert('MODAL POPUP!');
  }

  render(){
    return (
      <Page>
        <Button style={{marginLeft:20}} ref='button' onClick={() => this.setState({isOpen: true})} > CLICK HERE! 
        </Button>
        <Modal isOpen={this.state.isOpen}>

          <div style={{backgroundColor:'white',width:1000, height:1000, align:'center'}}>
            <div style={{marginTop:20, marginLeft:20}}>
              <p style={{color:'black', fontSize:20}}>Join the Action Sports Network</p>
            </div>

            <div style={{marginTop:20, marginLeft:20}}>
              Lorem ipsum dolor sit asmet, consectectur adipiscing elit. Nulla neque nibh, consequat in orci id, course auctor tortor. Fusce viverra bibendum erat, non rhoncus maris interdum in. In sit amet vehicula diam.
            </div>

            <div style={{marginTop:20, marginLeft:15}}>
              <p style={{color:'black', fontSize:25}}>Join With Your Facebook Account</p>
            </div>

            <div style={{marginTop:20, marginLeft:15}}>
              Or
            </div>

            <div style={{marginTop:20, marginLeft:15}}>
              <p style={{color:'black', fontSize:25}}> Fill Out Ehe Form Below </p>
            </div>
            
            <div style={{marginLeft:20, marginTop:20, marginBottom:10}}>
              <Input style={{width:130, backgroundColor:'#eee',paddingLeft:5}}
                value={this.state.text} float
                onChange={(event) => { this.setState({firstName: event.target.value})} }
                placeholder='FirstName*'/>
              <Input  style={{width:130, backgroundColor:'#eee',marginLeft:15, paddingLeft:5}}
                value={this.state.text} float
                onChange={(event) => { this.setState({lastName: event.target.value})} }
                placeholder='LastName*' />
            </div>
            <div style={{marginLeft:20}}>
              <Input style={{width:130, backgroundColor:'#eee',paddingLeft:5}}
                value={this.state.text} float
                onChange={(event) => { this.setState({userName: event.target.value})}}
                placeholder='UserName*' />
              <Input style={{width:130, backgroundColor:'#eee', marginLeft:15, paddingLeft:5}}
                value={this.state.text} float
                onChange={(event) => { this.setState({emailAddress: event.target.value})} }
                placeholder='Email Address*' />
            </div>
            <div style={{marginLeft:20, marginTop:20}}>
              <Input style={{width:130, backgroundColor:'#eee',paddingLeft:5}}
                value={this.state.text} float
                onChange={(event) => { this.setState({password: event.target.value})} }
                placeholder='Password*' />
              <Input  style={{width:130, backgroundColor:'#eee',marginLeft:15, paddingLeft:5}}
                value={this.state.text} float
                onChange={(event) => { this.setState({confirmPassword: event.target.value})} }
                placeholder='Confirm Password*' />
              <Button style={{height:32, marginLeft:15, paddingTop:0,backgroundColor:'#eee'}} onClick={this.alertPopup}> SUBMIT </Button>
            </div>

            <div style={{marginLeft:20, marginTop:20}}>
              <label>
                  <Input
                    type='checkbox'
                  />
              </label>
              <label style={{marginLeft:10}}>I have read and agree to the</label>
              <a href="https://onsen.io/"> terms of sevice.*</a>
            </div> 
            <Button onClick={() => this.setState({isOpen: false})}>
                  Close
            </Button>
          </div>          
        </Modal>
      </Page>
    );
  }
}

// const styles = StyleSheet.create({

//   CustomInput:{
//     width:200,
//     backgroundColor:'#eee'
//   }
// });