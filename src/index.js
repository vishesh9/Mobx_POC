import React, { useState } from "react";
import ReactDOM from "react-dom";

import Footer from "./components/Footer";
import "./styles.css";

import { observer } from "mobx-react-lite";
import { UserStore } from "./UserStore";
import { UserList } from "./components/UserList";

export const App = observer(() => {
  const [userStore] = useState(() => new UserStore());
  console.log(userStore);

  return (
    <div className="App">
      <h2>Select your choices!</h2>
      <UserList userStore={userStore} />
      {/* <Footer remaining={store.remainingTodos} total={store.todos.length} /> */}
    </div>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
