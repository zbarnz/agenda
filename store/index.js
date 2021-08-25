import Store from './store';

const withContext = Component => props => (
  <Store.Consumer>
    { store => <Component { ...props } store={store} /> }
  </Store.Consumer>
);

export default withContext;