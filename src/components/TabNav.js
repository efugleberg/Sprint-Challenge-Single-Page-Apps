import React from "react";
import { Tab, Menu, Icon, TabPane } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter.js";

// TODO: Add missing menu/tabs/nav below

const panes = [
  {
    menuItem: (
      <Menu.Item key="home">
        <NavLink to="/">
          <Icon name="home" />
          Home
        </NavLink>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <AppRouter />
      </Tab.Pane>
    )
  },

  {
    menuItem: (
      <Menu.Item key="characters">
        <NavLink to="/characters">
          <Icon name="users" />
          Characters
        </NavLink>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <AppRouter />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key="locations">
        <NavLink to="/locations">
          <Icon name="map outline" />
          Locations
        </NavLink>
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <AppRouter />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key="episodes">
        <NavLink to="/episodes">
          <Icon name="videos" />
          Episodes
        </NavLink>
      </Menu.Item>
    ),
    render: () => (
      <TabPane.Pane>
        <AppRouter />
      </TabPane.Pane>
    )
  }
];

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return <Tab panes={panes} />;
}
