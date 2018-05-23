import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminToolsNav from '../Nav/AdminToolsNav/AdminToolsNav';
import UserEntryPageList from './UserEntryPageList';

const mapStateToProps = state => ({
  state
})

class UserEntryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      user_type: false,
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const request = new Request('api/user/register', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          user_type: this.state.user_type,
        }),
      });

      // making the request to the server to post
      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            alert("user successfully added");
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Please wait a few minutes for the host server on Heroku to reset itself.',
          });
        });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        <AdminToolsNav />
        <h1>User Entry Page</h1>
        {this.renderAlert()}
          <form onSubmit={this.registerUser}>
            <h1>Add a new user</h1>
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
              </label>
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                value="Submit"
              />
            </div>
          </form>
        <div>

          <UserEntryPageList />

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserEntryPage);