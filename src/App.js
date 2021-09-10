import React from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid, Row } from '@zendeskgarden/react-grid';
import ZendeskWordmark
  from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg';
import { Header } from './components/Typography';
import '@zendeskgarden/css-bedrock';
import useCurrentUser from './hooks/zendesk/useCurrentUser';
import useDynamicAppHeight from './hooks/zendesk/useDynamicAppHeight';

/*
Little example Zendesk app with React and Zendesk Garden.

See the React docs on Hooks for more info about useState() and useEffect().
  https://reactjs.org/docs/hooks-intro.html

We're able to use an SVG file as a React component by installing the
@svgr/parcel-plugin-svgr package.
 */

function App() {
  const appHeightRef = useDynamicAppHeight();
  const { isSuccess: userIsLoaded, data: currentUser } = useCurrentUser();

  return (
      <ThemeProvider>
        {/* This div will change height dynamically to fit its content */}
        <div className="main" ref={appHeightRef}>
          <Grid>
            {userIsLoaded && (
                <Row>
                  <Header tag="h1">Hi, {currentUser.name}</Header>
                </Row>
            )}
            <Row justifyContent="between">
              <ZendeskWordmark color="green"/>
              <Button>Button</Button>
            </Row>
          </Grid>
        </div>
      </ThemeProvider>
  );
}

export default App;
