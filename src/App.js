import React from 'react';
import {ThemeProvider} from '@zendeskgarden/react-theming';
import {Button} from '@zendeskgarden/react-buttons';
import {Grid, Row} from '@zendeskgarden/react-grid';
import ZendeskWordmark
  from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg';
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
        <Grid>
          <Row><Header tag="h1">Hi, {userName}</Header></Row>
          <Row><Button>Button</Button></Row>
          <Row><ZendeskWordmark/></Row>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
