import React, { useEffect } from "react";
import ClassApp from "./components/ClassApp";
import ImageApp from "./components/ImageApp";

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("delay...");
      resolve("ok");
    }, 2000);
  });
};

function App() {
  const init = async () => {
    const res = await delay();
    console.log("init.res", res);
  };
  useEffect(() => {
    const a = 1;
    console.log("a", a);
    init();
  }, []);
  return (
    <div>
      <h2>webpack5-react-ts2</h2>
      <ClassApp />
      <ImageApp />
    </div>
  );
}
export default App;
