import React from 'react';
import ReactDOMServer, { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { setupStore } from './store/store';

const store = setupStore();

interface IRenderProps {
  path: string;
  options?: RenderToPipeableStreamOptions;
}

export const render = ({ path }: IRenderProps): PipeableStream => {
  return ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={path}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
};
