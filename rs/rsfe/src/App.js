import React from 'react';

function App({name,gender}) {
  return (
    <div>{name} , {gender}</div>
  );
}

App.defaultProps = {
  name: "halsey"
}

export default App;
