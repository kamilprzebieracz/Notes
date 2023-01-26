import React from "react";
import List from "../../components/List/List";
import AppContext from "../../context";

const TwittersView = () => (
  <AppContext.Consumer>
    {(context) => <List items={context.twitter} />}
  </AppContext.Consumer>
);

export default TwittersView;
