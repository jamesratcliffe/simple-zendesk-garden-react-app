import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid, Row } from '@zendeskgarden/react-grid';
import ZendeskWordmark
  from '@zendeskgarden/svg-icons/src/26/wordmark-zendesk.svg';
import Theme from './components/Theme';
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

/**
 * We need to create a client for React Query to provide to other components
 * @type {QueryClient}
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60000,
    },
  },
});

const App = () => {
  const appHeightRef = useDynamicAppHeight();
  const { isSuccess: userIsLoaded, data: currentUser } = useCurrentUser();

  return (
      <QueryClientProvider
          client={queryClient}> {/* Provide the react-query client to the app */}
        <ThemeProvider theme={Theme}> {/* Using an optional custom theme */}
          <div className="main"
               ref={appHeightRef}> {/* This div will change height dynamically to fit its content */}
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
      </QueryClientProvider>
  );
};

export default App;
