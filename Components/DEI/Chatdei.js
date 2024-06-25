import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class Chatdei extends Component {
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
                <h1 className="dashhead">DEI Officer Dashboard</h1>
                <section className="about_container">
                    
                    <div className="chatbox">
                    <h2> DEI Chat</h2>

                        <div className="chattxt">
                            <div className="chats">
                                <div className="sendertxt">Anna</div>
                                <div className="sendertxtmsg">Hi Martin, How are you?</div><br />
                                <div className="message-author">Martin</div>
                                <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                                <div className="message-author">Anna</div>
                                <div className="message-text">I am good. Thanks for asking. I want to know the requirements for post doc
                                    position?</div><br/>
                                    <div className="message-author">Anna</div>
                                    <div className="message-text">Hi Martin, How are you?</div><br />
                                    <div className="message-author">Martin</div>
                                    <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                                    <div className="message-author">Anna</div>
                                    <div className="message-text">I am good. Thanks for asking. I want to know the requirements for post doc
                                        position?</div><br/>
                                        <div className="message-author">Anna</div>
                                        <div className="message-text">Hi Martin, How are you?</div><br />
                                        <div className="message-author">Martin</div>
                                        <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                                        <div className="message-author">Anna</div>
                                        <div className="message-text">I am good. Thanks for asking. I want to know the requirements for post doc
                                            position?</div><br/>
                                            <div className="message-author">Anna</div>
                                            <div className="message-text">Hi Martin, How are you?</div><br />
                                            <div className="message-author">Martin</div>
                                            <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                                            <div className="message-author">Anna</div>
                                            <div className="message-text">I am good. Thanks for asking. I want to know the requirements for post doc
                                                position?</div><br/>
                                                <div className="message-author">Anna</div>
                                                <div className="message-text">Hi Martin, How are you?</div><br/>
                                                    <div className="message-author">Martin</div>
                                                    <div className="message-text">Hi Anna, I am good. What about you?</div><br/>
                                                        <div className="message-author">Anna</div>
                                                        <div className="message-text">I am good. Thanks for asking. I want to know the requirements for post doc
                                                            position?</div><br/>
                                                            <div className="message-author">Anna</div>
                                                            <div className="message-text">Hi Martin, How are you?</div><br/>
                                                                <div className="message-author">Martin</div>
                                                                <div className="message-text">Hi Anna, I am good. What about you?</div><br/>
                                                                    <div className="message-author">Anna</div>
                                                                    <div className="message-text">I am good. Thanks for asking. I want to know the requirements for post doc
                                                                        position?</div><br/>

                                                                    </div>

                                                                </div>
                                                                <form className="chatbottom" onSubmit={this.handleSubmit}>
                                                                    <input type="text" name="message" id="message" placeholder="Type your message..." onChange={this.handleInputChange} value={message}/>
                                                                    <button type="submit" className="button">Send</button>
                                                                </form>
                                                            </div>

                                                        </section>
                                                        <div className="button-container">
                                                            <Link to={AppUrl.Deidashboard} className="button">Back to Dashboard</Link>
                                                        </div>

                                                        <Footer/>
                                                    </div>
                                                
                                                )
  }
}
