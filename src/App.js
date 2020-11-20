import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {EVENT_MICROFRONTEND, ADMIN_MICROFRONTEND} from "./config/config";
import MicroFrontend from "./MicroFrontend";

class App extends Component {
  render() {
    const EventMicroFrontend = ({ history }) => (
      <MicroFrontend history={history} host={EVENT_MICROFRONTEND} name="Event" />
    );

    const AdminMicroFrontend = ({ history }) => (
      <MicroFrontend history={history} host={ADMIN_MICROFRONTEND} name="Admin" />
    );

    return (
      <BrowserRouter>
        <React.Fragment>
          <div>
            Container
          </div>
          <Switch>
            <Route exact path="/event" component={EventMicroFrontend} />
            <Route exact path="/admin" component={AdminMicroFrontend} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
