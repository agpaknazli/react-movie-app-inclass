import React from "react";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AppRouter />
      <AbortController/>
    </div>
  );
};

export default App;
