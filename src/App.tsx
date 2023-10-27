/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AppNavigation} from '@src/navigation/AppNavigation';
import {AppProvider} from './provider/AppProvider';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://2f3cb0cd86a2e9de8b846728003fa5ca@o4506120651800576.ingest.sentry.io/4506120657240064',
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // React.useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <AppProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
