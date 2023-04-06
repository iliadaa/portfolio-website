import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";

function ScrollToTopRoute({ component: Component, path, ...rest }) {
  const location = useLocation();

  useEffect(() => {
    if (path === location.pathname && path !== window.location.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, path]);

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

export default ScrollToTopRoute;
