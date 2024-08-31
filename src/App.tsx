import React, { lazy, Suspense, useState, useEffect } from "react";
import ClassApp from "@/components/ClassApp";
import ImageApp from "@/components/ImageApp";
import InputApp from "@/components/InputApp";
import { Demo1, Demo2 } from "@/components";
const LazyDemo = lazy(() => import("@/components/LazyDemo")); // 使用import语法配合react的Lazy动态引入资源
// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /*webpackPrefetch: true*/
      "@/components/PreFetchDemo"
    )
);
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPreload: true*/
      "@/components/PreloadDemo"
    )
);

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("delay.p");
      resolve("ok");
    }, 2000);
  });
};

function App() {
  const [show, setShow] = useState(false);

  // 点击事件中动态引入css, 设置show为true
  const onClick = () => {
    import("./app.less");
    setShow(true);
  };

  const init = async () => {
    const res = await delay();
    console.log("init.res...", res);
  };
  useEffect(() => {
    const a = 1;
    console.log("a.", a);
    init();
  }, []);
  return (
    <div>
      <h2>webpack5-react-ts2</h2>
      <h2 onClick={onClick}>展示</h2>
      {/* show为true时加载LazyDemo组件 */}
      {show && (
        <Suspense fallback={<span>loading...</span>}>
          <LazyDemo />
        </Suspense>
      )}
      {show && (
        <>
          <Suspense fallback={null}>
            <PreloadDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}
      <ClassApp />
      <ImageApp />
      <InputApp />
      <Demo1 />
    </div>
  );
}
export default App;
