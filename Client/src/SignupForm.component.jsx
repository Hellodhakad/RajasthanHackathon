import React, { Component } from 'react';
import Header from './Header.component';
import axios from 'axios';

class SignupForm extends React.Component {
  constructor(){
    super();
    this.state={
      fname:'',
      lname:'',
      aadhar:'',
      dob:'',
      email:'',
      phone:'',
      pincode:'',
      group1:'',
    };
  }

onChange = (e) => {
this.setState({ [e.target.name]: e.target.value });
}

onSubmit = (e) => {
  e.preventDefault();

  const { fname, lname, aadhar, dob, email, phone, pincode, group1 } = this.state;
  
axios.post('https://localhost:5000/signup', { fname, lname, aadhar, dob, email, phone, pincode, group1 }).then((result) =>{
console.log(result.data);
})
}

  render() {
    const { fname, lname, aadhar, dob, email, phone, pincode, group1 } = this.state;
      return (
        <div className="container">
        <Header />
			<div className="row">
				<form className="col s12" onSubmit={this.onSubmit}>
					<div className="row">
						<div className="input-field col s6">
							<input name="fname" value={fname} type="text" onChange={this.onChange} className="validate"/>
							<label htmlFor="fname">First Name</label>
						</div>
						<div className="input-field col s6">
							<input name="lname" value={lname} type="text"onChange={this.onChange}  className="validate"/>
							<label htmlFor="lname">Last Name</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input name="aadhar" value={aadhar} onChange={this.onChange} type="text" className="validate"/>
							<label htmlFor="aadhar">Aadhaar Number</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input type="date" value={dob} onChange={this.onChange} name="dob" className="datepicker"/>
							<label htmlFor="dob">Birth Date</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12">
							<input name="email" value={email} onChange={this.onChange}  type="email" className="validate"/>
							<label htmlFor="email">Email</label>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input name="phone" value={phone} onChange={this.onChange} type="text" className="validate"/>
							<label htmlFor="phone">Mobile</label>
						</div>
						<div className="input-field col s6">
							<input name="pincode" value={pincode} onChange={this.onChange} type="text" className="valnameate"/>
							<label htmlFor="pincode">PIN Code</label>
						</div>
					</div>
					<div className="row">
						<div className="col s3 m2 l2 xl2">
							<label>
								<input className="with-gap" value={group1} onChange={this.onChange} name="group1" type="radio" checked />
								<span>Male</span>
							</label>
						</div>
						<div className="col s3 m2 l2 xl2">
							<label>
								<input className="with-gap" value={group1} onChange={this.onChange}  name="group1" type="radio" />
								<span>Female</span>
							</label>
						</div>
						<div className="col s3 m2 l2 xl2">
							<label>
								<input className="with-gap" value={group1} onChange={this.onChange} name="group1" type="radio" />
								<span>Other</span>
							</label>
						</div>
						<div className="col s3 push-m4 push-l4 push-xl4">
							<button className="btn waves-effect waves-light" type="submit" name="action">Submit
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

  export default SignupForm