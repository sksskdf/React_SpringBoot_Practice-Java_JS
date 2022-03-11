import React from 'react';
import {Typography} from "@mui/material";




function App({name,gender,color}) {
  return (
      <div>
        <Typography
            variant="h1"
            color={color}
        >
            MUI
        </Typography>

        <Typography
            color="textPrimary"
        >{name} , {gender}
        </Typography>
      </div>

  );
}

App.defaultProps = {
  name: "halsey"
}

export default App;
