import React, { Component } from 'react';
import './contact.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      fname: '',
      lname: '',
      cnumber: '',
      email: '',
      message: '',
      submitted: false,
    };
  }

  handleTabClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    // For example, you can send the form data to a server or perform client-side validation.
    // Once the submission is complete, you can update the state to show the "Thank You!" message.
    this.setState({ submitted: true });
  };

  render() {
    const { isOpen, fname, lname, cnumber, email, message, submitted } = this.state;

    return (
      <div className="contactsection" id="contactsection">
        <div className="tab" onClick={this.handleTabClick}>
          {isOpen ? 'Close Form' : 'Contact Form'}
        </div>
        {isOpen && (
          <>
            <h2>Contact</h2>
            {submitted ? (
              <div id="querySubmitted">
                <h2>Thank You!</h2>
                <p>Your question has been submitted.</p>
              </div>
            ) : (
              <form id="contactform" onSubmit={this.handleSubmit}>
                <label htmlFor="fname">First name:</label><br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Required"
                  value={fname}
                  onChange={this.handleInputChange}
                /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Required"
                  value={lname}
                  onChange={this.handleInputChange}
                /><br />
                <label htmlFor="cnumber">Contact number:</label><br />
                <input
                  type="number"
                  id="cnumber"
                  name="cnumber"
                  placeholder="Required"
                  value={cnumber}
                  onChange={this.handleInputChange}
                /><br />
                <label htmlFor="email">Enter your email:</label><br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Required"
                  value={email}
                  onChange={this.handleInputChange}
                /><br />
                <label htmlFor="message">Question</label><br />
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  cols="30"
                  placeholder="Please write your query here.."
                  value={message}
                  onChange={this.handleInputChange}
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            )}
          </>
        )}
      </div>
    );
  }
}

export default ContactForm;
