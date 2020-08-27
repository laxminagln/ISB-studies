import React from 'react';
import './Userform.css';

class Userform extends React.Component {
    render = () => {
        return(
            <div className="conatainer">
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
        );
    };
}

export default Userform;