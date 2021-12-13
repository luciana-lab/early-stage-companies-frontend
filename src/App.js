import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CompaniesContainer from './containers/CompaniesContainer';
import { loginStatus } from './redux/actions/usersActions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.loginStatus()
  }

  render() {
    return (
      <div className="App">
        <Navbar userLoggedIn={this.props.users ? this.props.users : null} />
        <CompaniesContainer userLoggedIn={this.props.users ? this.props.users : null} />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginStatus: () => dispatch(loginStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);