import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import image1 from "./images/companylogo.png";

class App extends Component {
    constructor(){
        super()
            this.state = {
                fullName:"",
                username:"",
                email:"",
                password:""
            }
            this.changeFullName = this.changeFullName.bind(this);
            this.changeUsername = this.changeUsername.bind(this);
            this.changeEmail = this.changeEmail.bind(this);
            this.changePassword = this.changePassword.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        }
        changeFullName(event){
            this.setState({
                fullName: event.target.value
            });
        }
        changeUsername(event){
            this.setState({
                username: event.target.value
            });
        }
        changeEmail(event){
            this.setState({
                email: event.target.value
            });
        }
        changePassword(event){
            this.setState({
                password: event.target.value
            });
        }
        
        onSubmit(event){
            event.preventDefault()

            const registered = {
                fullName: this.state.fullName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }

            axios.post("http://localhost:4000/app/signup", registered)
                .then(response => console.log(response.data))

                this.setState({
                    fullName:"",
                    username:"",
                    email:"",
                    password:""
                });
        }

        render(){
            return(
                <div>
                    <div className="container">
                        <div className="form-div">
                            <h1>HARLEY-DAVIDSON</h1>
                            <h3> Membership Form</h3>
                            <form onSubmit={this.onSubmit}>
                             <div className="row">
                                <div className="form-group col-sm-6">
                                <div className="form-group">
                                <label for="">Enter your Full Name</label>
                                <input type="text" placeholder="Full Name" onChange={this.changeFullName} value={this.state.fullName} className="form-control" />
                                </div>
                                <div className="form-group">
                                <label for="">Enter username</label>
                                <input type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.username} className="form-control" />
                                </div>
                                <div className="form-group">
                                <label for="">Enter your email </label>
                                <input type="text" placeholder="E-mail" onChange={this.changeEmail} value={this.state.email} className="form-control" />
                                </div>
                                <div className="form-group">
                                <label for="">Enter password</label>
                                <input type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} className="form-control" />
                                </div>
                                <div className="form-group">
                                <input type="submit" className="btn btn-danger btn-primary" value="submit" />
                                </div>
                                </div>
                                <div className="form-group col-sm-6">
                                    <div className="form-group">
                                        <img src={image1} class="pull-right" alt="companylogo" />
                                    </div>
                                </div>
                             </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }


export default App;