// Batch push to database for product collection code is commented
// As this is required only once

import React from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  auth, 
  createUserProfileDocument, 
  // addCollectionAndDocuments
} from './firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from "./pages/checkout/checkout.component";


import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

 // import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

import './App.css';

export class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount(){

    // const { setCurrentUser, collectionArray } = this.props;

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth); 
      // addCollectionAndDocuments('collections', collectionArray.map(({title,items}) => ({title,items})));
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
            render={ () =>
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
          }/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);