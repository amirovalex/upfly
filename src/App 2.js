import  React ,{Component}  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors.js';
import { selectIsLoading } from './redux/searchbox/searchbox.selectors.js';
import { fetchUserStartAsync, setCurrentUser } from './redux/user/user.actions.js';
import HomePage from './pages/homepage/homepage.component.jsx';
import UserPage from './pages/userpage/userpage.component.jsx';
import SignIn from './components/signin/signin.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import SearchPage from './pages/searchpage/searchpage.component.jsx';
import WithSpinner from './components/with-spinner/withspinner.component.jsx';
import { auth } from './firebase/firebase.utils';
import { setIsLoading } from './redux/searchbox/searchbox.actions.js'
import { AppContainer, HtmlStyle } from './app.styles.jsx';

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  isLoading:selectIsLoading
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:(user) => dispatch(setCurrentUser(user)),
  fetchUserStartAsync:(userAuth) => dispatch(fetchUserStartAsync(userAuth)),
  setIsLoading:(bool) => dispatch(setIsLoading(bool))
})

const SearchPageWithSpinner = WithSpinner(SearchPage);

class App extends Component {

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await fetchUserStartAsync(userAuth)
      }
      this.props.setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render(){
      return (
      	<AppContainer>
        	<HtmlStyle/>
        	<Navbar/>
          <Route path='/' component={SignIn} />
        	<Switch>
          	<Route exact path='/' component={HomePage} />
          	<Route path='/user' render={(props) => this.props.currentUser ? 
              (<UserPage {...props}/>)
              : (<Redirect to="/"/>)
              }/>
            <Route path ='/search' render={(props) => <SearchPageWithSpinner isLoading={this.props.isLoading} setIsLoading={this.props.setIsLoading} {...props}/>} />
          </Switch>       
        </AppContainer>
      )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);