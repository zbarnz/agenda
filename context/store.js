import React from 'react';

const store = {
  default: {
    username: null,
    jwt: null,
    test: 'bacon'
  }
}

const Store = React.createContext( store );

export default Store;