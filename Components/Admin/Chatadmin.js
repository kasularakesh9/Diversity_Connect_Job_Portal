import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

export default class Chatadmin extends Component {
    state = {
        message: ''
      };
    
      handleInputChange = (event) => {
        this.setState({ message: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { message } = this.state;
        if (message.trim() !== '') {
          alert(message);
          this.setState({ message: '' });
        }
      };
     
      render() {
        const { message } = this.state;
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

    <AdminSideMenu/>
    <div className="about_container">
        <div className="chatbox">
            <h2> Admin Chat</h2>
            <div className="chattxt">
                <div className="chats"><br /><br />
                  <div className="sendertxt">Anna</div><br />
                  <div className="sendertxtmsg">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                </div>

            </div>
            <form className="chatbottom" onSubmit={this.handleSubmit}>
                <input type="text" name="message" id="message" placeholder="Type your message..." onChange={this.handleInputChange} value={message} />
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    </div>

    <Footer/>

</div>
     
      
    )
  }
}
