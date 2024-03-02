import { render as rtlRender } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from "redux";
import rootReducer from '../store/reducers';
import { Todo } from '../store/types';
// import rootReducer from './path/to/rootReducer'; // Import your rootReducer here

interface RenderOptions {
  initialState?: Todo[];
}

const renderWithProvider = (
  ui: React.ReactElement,
  {
    initialState,
    ...renderOptions
  }: RenderOptions = {}
) => {
  const store = createStore(rootReducer, {
    todos: {
      present: initialState ? [...initialState] : [],
      future: [],
      past: [],
    }
  });
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// export * from '@testing-library/react'; // re-export everything
export default renderWithProvider

