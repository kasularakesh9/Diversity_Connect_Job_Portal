import React, { Component }  from 'react'
import { withRouter } from '../../withRouter'
import { AppUrl } from '../../Constants'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

class Logout extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
     
    componentDidMount(){
        this.props.onLogin(false);//set passed isLogin to false and redirect to home page.
        //this.props.navigate('/');
       
    }
    
  render() {
    return (
      <div>
        <main className="homemid">
                    <h1>DIVERSITY CONNECT</h1>
                    <p className="center">Unleash Your Remarkable Potential with URM <br/> Empowering Success, Igniting Excellence!</p>

                    <div className="button-container">
                        <Link to={AppUrl.login} className="button">Login</Link>
                        <Link to={AppUrl.register} className="button">Register</Link>
                    </div>
                </main>

                <Footer />
      </div>
    )
  }
} 
export default withRouter(Logout);