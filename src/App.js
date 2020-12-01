import React, { Suspense, lazy } from "react";
import "./App.css";
// import Homepage from "./containers/homepage";

// import OurCrewPage from "./containers/ourCrewPage";
// import BlogPage from './containers/blog';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Homepage = lazy(() => import('./containers/homepage'));
const OurCrewPage = lazy(() => import('./containers/ourCrewPage'));
const BlogPage = lazy(() => import('./containers/blog'));




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<span>Loading...</span>}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <Homepage />} />
              <Route exact path="/crew" render={() => <OurCrewPage />} />
              <Route exact path="/blog" render={() => <BlogPage />} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;
