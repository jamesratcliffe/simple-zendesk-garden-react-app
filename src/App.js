import React from 'react';
import client from './client.js'

function App() {
  const [userName, setUserName] = React.useState(0);

  React.useEffect(async () => {
    const data = await client.get('currentUser');
    setUserName(data.currentUser.name);
  });

  return (
      <>
        <h1>
          Current User is {userName}
        </h1>
      </>
  );
}

export default App;