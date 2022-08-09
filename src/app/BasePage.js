import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen } from "../_metronic/layout";
 
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
 
export default function BasePage() { 
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        { 
          <Redirect exact from="/" to="/e-commerce" />
        } 
        <Route path="/e-commerce" component={ECommercePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
