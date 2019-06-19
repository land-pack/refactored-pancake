import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

import Foo from "./components/Foo";

// Route Views

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/foo" />
  },
  {
    path: "/foo",
    exact: true,
    layout: DefaultLayout,
    component: Foo
  }
];
