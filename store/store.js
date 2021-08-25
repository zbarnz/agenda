import React from 'react';
import bindStore from './util/bind-store'

const store = bindStore();

export default React.createContext( store );
