import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

ReactDOM.render(
  <React.StrictMode>
      <Wrapper>
          <App name="harry" gender="male" />
          <App gender="female" />
          <Counter />
          <InputSample />
      </Wrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
