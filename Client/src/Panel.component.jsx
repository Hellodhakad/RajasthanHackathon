import React, { Component } from 'react';

class Panel extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l4 xl3">
                        <div className="card">
                            <div className="card-image">
                                <img src="img/city-palace-jaipur1.jpg" /></img>
                            </div>
                        </div>
                        <div className="card-action">
                            <div className="row center">
                                <a href="#" id="profile-btn">Edit Profile</a>
                            </div>
                            <div className="row center">
                                <a href="#" id="work-btn">Work history</a>
                            </div>
                            <div className="row center">
                                <a href="#" id="tourist-btn">Tourists</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m6 l8 xl9">
                    <div className="container" id="profile-tab">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="firstname" type="text" className="validate" disabled />
                                    <label htmlFor="firstname">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="lastname" type="text" className="validate" disabled />
                                    <label htmlFor="lastname">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="aadhar" type="text" className="validate" disabled />
                                    <label htmlFor="aadhar">Aadhaar Number</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type="text" className="datepicker" disabled />
                                    <label htmlFor="birthdate">Birth Date</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate" />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="mobile" type="text" className="validate" />
                                    <label htmlFor="mobile">Mobile</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="pincode" type="text" className="validate" />
                                    <label htmlFor="pincode">PIN Code</label>
                                </div>
                            </div>
                            <div className="row center">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Update
		    					<i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="container" id="work-tab">
                        <ul className="collapsible">
                            <li className="active">
                                <div className="collapsible-header">
                                    <div className="chip">
                                        <img src="img/city-palace-jaipur1.jpg" alt="Contact Person"></img>
                                        Jane Doe
								</div>
                                </div>
                                <div className="collapsible-body"><span>Feedback of User</span></div>
                            </li>
                            <li className="active">
                                <div className="collapsible-header">
                                    <div className="chip">
                                        <img src="img/city-palace-jaipur1.jpg" alt="Contact Person"></img>
                                        Jane Doe
								</div>
                                </div>
                                <div className="collapsible-body"><span>Feedback of User</span></div>
                            </li><li className="active">
                                <div className="collapsible-header">
                                    <div className="chip">
                                        <img src="img/city-palace-jaipur1.jpg" alt="Contact Person"></img>
                                        Jane Doe
								</div>
                                </div>
                                <div className="collapsible-body"><span>Feedback of User</span></div>
                            </li>
                        </ul>
                    </div>
                    <div className="container" id="tourist-tab">
                        <ul className="collection">
                            <li className="collection-item avatar">
                                    <img src="img/city-palace-jaipur1.jpg" alt="" className="circle"></img>
                                    <span className="title">Devendra</span>
                                    <p>Amer fort<br></br>Jaipur
							        </p>
                                    <a href="#!" className="secondary-content"><i className="material-icons">phone</i></a>
						    </li>
                                <li className="collection-item avatar">
                                    <i className="material-icons circle">folder</i>
                                    <span className="title">Title</span>
                                    <p>First Line <br></br>
                                        Second Line
							        </p>
                                        <a href="#!" className="secondary-content"><i className="material-icons">phone</i></a>
						        </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle green">insert_chart</i>
                                        <span className="title">Title</span>
                                        <p>First Line <br></br>
                                            Second Line
						              	</p>
                                            <a href="#!" className="secondary-content"><i className="material-icons">phone</i></a>
						            </li>
                                        <li className="collection-item avatar">
                                            <i className="material-icons circle red">play_arrow</i>
                                            <span className="title">Title</span>
                                            <p>First Line <br></br>
                                                Second Line</p>
                                            <a href="#!" className="secondary-content"><i className="material-icons">phone</i></a>
						                </li>
					    </ul>
				    </div>
			    </div>
            </div>
                        );
                    }
                    }
                    
export default Panel