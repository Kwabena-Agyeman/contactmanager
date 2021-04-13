import React, { Component, createContext } from 'react';

const MyContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case `DELETE_CONTACT`:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };
    case `ADD_CONTACT`:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  async componentDidMount() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');

    let data = await users.json();

    this.setState({ contacts: data });
  }

  render() {
    return <MyContext.Provider value={this.state}>{this.props.children}</MyContext.Provider>;
  }
}

export const Consumer = MyContext.Consumer;
