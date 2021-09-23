import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { TRANSACTION_MICROFRONTEND, ACCOUNT_MICROFRONTEND} from "./config";
import MicroFrontend from "./MicroFrontend";

class App extends Component {
  render() {
    const TransactionMicroFrontend = ({ history }) => (
      <MicroFrontend history={history} host={TRANSACTION_MICROFRONTEND} name="Transaction" />
    );

    const AccountMicroFrontend = ({ history }) => (
      <MicroFrontend history={history} host={ACCOUNT_MICROFRONTEND} name="Account" />
    );

    return (
      <BrowserRouter>
        <React.Fragment>
          <div>
            Microfrontend Core Container
          </div>
          <Switch>
            <Route exact path="/transaction" component={TransactionMicroFrontend} />
            <Route exact path="/account" component={AccountMicroFrontend} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
