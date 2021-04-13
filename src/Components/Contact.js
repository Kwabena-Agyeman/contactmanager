import React, { Component } from 'react';
import { Consumer } from '../Context';

class Contact extends Component {
  state = {
    showInfo: false,
  };

  displayInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { name, email, phone, id } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className='card mb-3'>
                <div className='card-header d-flex justify-content-between'>
                  <h4>
                    {name}{' '}
                    <i
                      className={this.state.showInfo ? `bi bi-arrow-up-circle-fill` : `bi bi-arrow-down-circle-fill`}
                      style={{ fontSize: '20px' }}
                      onClick={this.displayInfo}
                    ></i>
                  </h4>
                  <i
                    className='bi bi-x-circle d-block'
                    style={{ fontSize: '20px', color: 'red' }}
                    onClick={() => {
                      dispatch({ type: `DELETE_CONTACT`, payload: id });
                    }}
                  ></i>
                </div>
                {this.state.showInfo ? (
                  <ul className='list-group'>
                    <li className='list-group-item'>Email : {email}</li>
                    <li className='list-group-item'>Phone : {phone}</li>
                  </ul>
                ) : null}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
