import  React ,{Component}  from 'react';
import './App.css';
import FrontPage from './frontpage.component.jsx';
import Navbar from './navbar.component.jsx';
import DealsPage from './dealspage.component.jsx';


class App extends Component{

  render(){
      return (
        <div>
        <Navbar />
        <FrontPage />
        <DealsPage />
        </div>
      )
    }
}

export default App;



// FrontPage with searchBar
// FrontPage to navBar
// ticketsCheckout
// navbarMenu for phone also
// smooth transitions and fast
// bestDeals with cheapest flights
// 5 categories
// signIn and Register on half page 
// flightsPage
// clean design
// white blue colors
// fresh gray
