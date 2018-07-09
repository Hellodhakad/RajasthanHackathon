
import React, { Component } from 'react';
import Header from './Header.component';

class EnterOtp extends React.Component{
    render(){
      return (
        <div className="container">
        <Header />
        <div className="row">
          <form className="col s12 m4 push-m4 l4 push-l4 push-xl4 xl4">
    
            <div className="row">
              <div className="input-field col s12">
                <input id="otp" type="number" class="validate"></input>
                <label htmlFor="otp">Enter OTP</label>
              </div>
            </div>
            
            <div className="row">
              <div className="col s12 push-m3 push-l3 push-xl3">
              <button className="btn waves-effect waves-light" type="submit" name="action">Verify
                  <i className="material-icons right">send</i>
              </button>
              </div>
              </div>
          </form>
        </div>
      </div>
      );
    }
  }

  export default EnterOtp