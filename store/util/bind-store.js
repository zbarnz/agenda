import auth from '../dispatch/auth';

const modules = {
  auth
}

const bind = () => {
  let store = {}

  for ( const [ moduleName, module ] of Object.entries( modules ) ) {
    store[ moduleName ] = {};

    for ( const [ funcName, func ] of Object.entries( module ) ) {
      
      store[ moduleName ][ funcName ] = func;

      store[ moduleName ][ funcName ] = store[ moduleName ][ funcName ].bind( store );

      store[ moduleName ][ funcName ](
        'email',
        'username',
        'password'
      );
    }
  }

  return store;
}

module.exports = bind;