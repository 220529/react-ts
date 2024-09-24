import React, { useState, useEffect } from "react";
import { Button, formatTime, TestLess, TestStyled } from "dumi2-app";

export default React.memo(() => {
  const [currentDate, setCurrentDate] = useState(formatTime(Date.now(), "YYYY年MM月DD日 hh:mm:ss"));
  return (
    <div>
      <TestLess title="i like TestLess" />
      <TestStyled title="i like TestStyled" />
      <span>dumi-app： 当前时间：{currentDate}</span>
      {/* <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button> */}
    </div>
  );
});
