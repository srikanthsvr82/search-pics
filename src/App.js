import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import PhotoContextProvider from "./context/PhotoContext";

export default class App extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            ></Route>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              ></Route>
              <Route
                path="/mountain"
                render={() => <Item searchTerm="mountain" />}
              ></Route>
              <Route
                path="/beach"
                render={() => <Item searchTerm="beach" />}
              ></Route>
              <Route
                path="/bird"
                render={() => <Item searchTerm="bird" />}
              ></Route>
              <Route
                path="/food"
                render={() => <Item searchTerm="food" />}
              ></Route>
              <Route
                path="/search/:searchInput"
                render={(props) => {
                  return <Search searchTerm={props.match.params.searchInput} />;
                }}
              ></Route>
              <Route Component={NotFound}></Route>
              <Route></Route>
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}
