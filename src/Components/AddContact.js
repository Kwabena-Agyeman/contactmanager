import React, { Component } from 'react';
import { Consumer } from '../Context';
import { v4 as uuidv4 } from 'uuid';
import { withRouter } from 'react-router-dom';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  ChangeData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitData = (dispatch) => {
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };

    dispatch({ type: `ADD_CONTACT`, payload: newContact });

    this.setState({
      name: '',
      email: '',
      phone: '',
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className='card-header'>
                <h1 className='display-3'>Add Contact</h1>
              </div>
              <div className='card-body'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.SubmitData(dispatch);
                  }}
                >
                  <div className='mb-3'>
                    <label htmlFor='InputName' className='form-label'>
                      Name
                    </label>
                    <input
                      name='name'
                      type='text'
                      className='form-control form-control-lg'
                      id='InputName'
                      placeholder='Name'
                      value={name}
                      onChange={this.ChangeData}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='InputEmail1' className='form-label'>
                      Email
                    </label>
                    <input
                      name='email'
                      type='email'
                      className='form-control form-control-lg'
                      id='InputEmail1'
                      placeholder='Email'
                      value={email}
                      onChange={this.ChangeData}
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='InputPhone' className='form-label'>
                      Phone
                    </label>
                    <input
                      name='phone'
                      type='phone'
                      className='form-control form-control-lg'
                      id='Inputhone'
                      placeholder='Phone'
                      value={phone}
                      onChange={this.ChangeData}
                      required
                    />
                  </div>

                  <input className='btn btn-primary ' type='submit' />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(AddContact);
