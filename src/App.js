import React from 'react';
import {ThemeProvider} from '@zendeskgarden/react-theming';
import {Button} from '@zendeskgarden/react-buttons';
import {Grid, Row} from '@zendeskgarden/react-grid';
import ZendeskWordmark
  from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg';
import {Header} from './Components/Typography';
import Zendesk from './lib/Zendesk';
import '@zendeskgarden/css-bedrock';

/*
Little example Zendesk app with React and Zendesk Garden.

See the React docs on Hooks for more info about useState() and useEffect().
  https://reactjs.org/docs/hooks-intro.html

We're able to use an SVG file as a React component by installing the
@svgr/parcel-plugin-svgr package.
 */

function App() {
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    (async () => {
      setUserName(await Zendesk.getCurrentUserName());
    })();
  }, []); // The deps array is empty because the current user won't change

  return (
      <ThemeProvider>
        <Grid>
          <Row><Header tag="h1">Hi, {userName}</Header></Row>
          <Row justifyContent="between">
            <ZendeskWordmark color="green"/>
            <Button>Button</Button>
          </Row>
        </Grid>
      </ThemeProvider>
  );
}

export default App;
