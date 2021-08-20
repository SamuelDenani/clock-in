import { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";

import ConditionalRoute from "./components/ConditionalRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const EmployeeHome = lazy(() => import("./pages/Employee/Home"));
const RegisterHistory = lazy(() => import("./pages/Employee/History"));
const RegisterEmployee = lazy(() => import("./pages/Company/Employees"));
const SplashScreen = lazy(() => import("./pages/SplashScreen"));

export default function Routes() {
  const { loading, logged } = useAuth();

  if (loading) return <SplashScreen />;

  return (
    <BrowserRouter>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />

        {/* Private Routes */}
        <ConditionalRoute
          path="/pontos"
          renderCondition={logged}
          fallbackRoute="/login"
          exact
        >
          <EmployeeHome />
        </ConditionalRoute>

        <ConditionalRoute
          path="/pontos/historico"
          renderCondition={logged}
          fallbackRoute="/login"
        >
          <RegisterHistory />
        </ConditionalRoute>

        <ConditionalRoute
          path="/empresa"
          renderCondition={logged}
          fallbackRoute="/login"
          exact
        >
          <RegisterEmployee />
        </ConditionalRoute>
      </Switch>
    </BrowserRouter>
  );
}
