import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { css, styled } from "./stitches.config";

const ErrorFallback = React.lazy(
  () => import("./components/ErrorFallback/ErrorFallback")
);
const RouteIndex = React.lazy(() => import("./routes/index"));
const RouteExample = React.lazy(() => import("./routes/example"));

const StyledLink = styled(Link, {
  color: "$blue",
});

const App = () => {
  return (
    <Router>
      <nav
        className={css({
          margin: "16px",
          "& > * + *": {
            marginLeft: "16px",
          },
        })()}
      >
        <StyledLink to="/">Index</StyledLink>
        <StyledLink to="example">Example</StyledLink>
      </nav>
      <div className={css({ margin: "16px" })()}>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<RouteIndex />} />
            <Route path="/example" element={<RouteExample />} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export const Root = (): JSX.Element => {
  return (
    <React.StrictMode>
      <React.Suspense fallback={null}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </React.Suspense>
    </React.StrictMode>
  );
};
