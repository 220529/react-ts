import React, { useState } from "react";

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <>
      <input type="text" value={count} onChange={onChange} />
      <p>受控组件</p>
      <br />
      <input type="text" />
      <p>非受控组件</p>
    </>
  );
}
export default App;
