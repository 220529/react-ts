import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const a = 1;
    console.log("a", a);
  }, []);
  return <h2>webpack5-react-ts2</h2>;
}
export default App;
