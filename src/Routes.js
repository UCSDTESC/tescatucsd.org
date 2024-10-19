import { Switch, Route, withRouter } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import { Spinner } from "reactstrap";

import Layout from "./layouts/Layout";

import EOTGRoutes from './pages/EOTGPage/Routes';

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function LoadingSpinner(props) {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status" size="xl" />
    </div>
  );
}

function Routes() {
  const withLayout = (Child, isOrgs = false) => {
    return () => (
      <Layout isOrgs={isOrgs}>
        <Child />
      </Layout>
    );
  };

  useEffect(() => {
    console.log(
      "%c Interested in building awesome web projects? Email us at hello@tesc.ucsd.edu! ",
      `
            background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); 
            color: black; 
            font-size: 2rem; 
            text-align: center`
    );
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route path="/" component={EOTGRoutes} />
        <Route path="/eotg" component={EOTGRoutes} />

        <Route component={withLayout(NotFoundPage)} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
