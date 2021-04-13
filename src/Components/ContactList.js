import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../Context';

class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {/* value here is from state in context.js */}
        {(value) => {
          const { contacts } = value;
          return (
            <div>
              <h1 className='display-3 mb-3 card-header  p-3'>
                <span className='text-danger'>Contacts</span> List
              </h1>
              {contacts.map((contact) => {
                return <Contact key={contact.id} contact={contact} />;
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactList;
