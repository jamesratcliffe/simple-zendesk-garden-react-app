import React from 'react';
import {ThemeProvider} from '@zendeskgarden/react-theming';
import {Button} from '@zendeskgarden/react-buttons';
import {Header} from './Components/Typography';
import Zendesk from './lib/Zendesk';
import '@zendeskgarden/css-bedrock';

function App() {
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    (async () => {
      setUserName(await Zendesk.getCurrentUserName());
    })();
  });

  return (
      <ThemeProvider>
        <Header tag="h1">{userName}</Header>
        <Button>Example Garden button</Button>
      </ThemeProvider>
  );
}

export default App;