import React from 'react';
import './Userform.css';

class Userform extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            phoneNumber:"",
            password:"",
            gender:""
        };
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    onPhoneChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    onGenderChange = (e) => {
        this.setState({
            gender: e.target.value
        });
    };

    onSubmit = () => {
        const data = `
            Name: ${this.state.name},
            Email: ${this.state.email},
            Phone: ${this.state.phoneNumber},
            Gender: ${this.state.gender},
            Password: ${this.state.password}
        `;
        window.alert(data);
        this.clearForm();
    };

    clearForm = () => {
        this.setState({
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            gender: ""
        });
    };
    
    render = () => {
        return(
            <div className="conatainer">
                <div className="form_container">
                    <p className="title">User Form</p>
                    <input 
                        type="text" 
                        placeholder="Enter Name"
                        onChange={this.onNameChange}
                        value={this.state.name}
                    />
                    <input 
                        type="email" 
                        placeholder="Enter Email"
                        onChange={this.onEmailChange}
                        value={this.state.email}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Phone Number"
                        onChange={this.onPhoneChange}
                        value={this.state.phoneNumber}
                    />
                    <select onChange={this.onGenderChange} value={this.state.gender}>
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <input 
                        type="password" 
                        placeholder="Enter Password"
                        onChange={this.onPasswordChange}
                        value={this.state.password}
                    />
                    <button onClick={this.onSubmit} className="submit_btn">
                        Submit
                    </button>
                </div>
            </div>
        );
    };
}

export default Userform;