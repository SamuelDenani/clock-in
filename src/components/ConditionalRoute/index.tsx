import { Redirect, Route, RouteProps } from "react-router-dom";

type ConditionalRouteProps = RouteProps & {
  renderCondition: boolean;
  fallbackRoute: string;
};

export default function ConditionalRoute({
  renderCondition,
  children,
  fallbackRoute,
  ...props
}: ConditionalRouteProps) {
  return (
    <Route
      {...props}
      render={() => {
        return renderCondition ? children : <Redirect to={fallbackRoute} />;
      }}
    />
  );
}
