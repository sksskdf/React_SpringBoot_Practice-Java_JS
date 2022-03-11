import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import InputsSample from "./InputsSample";
import User from "./User";
import '@fontsource/roboto/400.css';
import {Typography} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
      <Typography>
          <Wrapper>
              <App name="harry" gender="male" color="primary"/>
              <App gender="female" color="textSecondary"/>
          </Wrapper>
          <Wrapper>
              <Counter />
          </Wrapper>
          <Wrapper>
              <InputSample />
          </Wrapper>
          <Wrapper>
              <InputsSample />
          </Wrapper>
          <Wrapper>
              <User />
          </Wrapper>
      </Typography>
  </React.StrictMode>,
  document.getElementById('root')
);
