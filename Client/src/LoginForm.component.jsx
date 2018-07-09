import React, { Component } from 'react';
import Header from './Header.component';

class LoginForm extends React.Component {
    render() {
      return (
        <div className="container">
        <Header />
			<div className="row">
				<form className="col s12 m4 push-m4 l4 push-l4 push-xl4 xl4">
					<div className="row">
						<div className="input-field col s12">
							<select>
								<option value="" disabled selected>Choose your option</option>
								<option value="1">Tourist</option>
								<option value="2">Guide</option>
							</select>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input type="email" className="validate"></input>
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input type="password" className="validate"></input>
							<label htmlFor="password">Password</label>
						</div>
					</div>
					<div className="row">
						<div className="col s12 push-m3 push-l3 push-xl3">
						<button className="btn waves-effect waves-light" type="submit" name="action">Log In
	    					<i class="material-icons right">send</i>
	  				</button>
	  				</div>
  					</div>
				</form>
			</div>
		</div>
    
      );
    }
  }

  export default LoginForm