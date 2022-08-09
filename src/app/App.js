 
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "../app/Routes";
import { I18nProvider } from "../_metronic/i18n";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";

export default function App({ store, persistor, basename }) {
  return ( 
    <Provider store={store}> 
      <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}> 
        <React.Suspense fallback={<LayoutSplashScreen />}> 
          <BrowserRouter basename={basename}> 
            <MaterialThemeProvider> 
              <I18nProvider> 
                <Routes />
              </I18nProvider>
            </MaterialThemeProvider>
          </BrowserRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}
