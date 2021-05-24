import * as React from "react";
import { styled } from "../stitches.config";

const RouteExample = (): JSX.Element => {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <div>
      <h1>Example</h1>
      <Button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </Button>
    </div>
  );
};

const Button = styled("button", {
  appearance: "none",
  border: "none",
  padding: "8px 12px",
  fontSize: "14px",
  fontWeight: "600",
  color: "white",
  cursor: "pointer",
  borderRadius: "6px",
  background: "$blue",
  "&:hover": {
    background: "$blueDark",
  },
});

export default RouteExample;
