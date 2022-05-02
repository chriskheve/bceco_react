import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

const SecteurActivite = lazy(() =>
  import("./modules/Activite/SecteurActivite")
);

const SecteurIdentification = lazy(() =>
  import("./modules/Identification/SecteurIdentification")
);

const SecteurPrestation = lazy(() =>
  import("./modules/Secteurs/SecteurPrestation")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/secteurs-identification" component={SecteurIdentification} />
        <Route path="/secteurs-activite" component={SecteurActivite} />
        <Route path="/secteurs-prestations" component={SecteurPrestation} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
