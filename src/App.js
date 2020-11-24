import React from 'react';
import Zendesk from './lib/Zendesk';

function App() {
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    (async () => {
      setUserName(await Zendesk.getCurrentUserName());
    })();
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