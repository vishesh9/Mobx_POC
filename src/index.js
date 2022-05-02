import React, { useState } from "react";
import ReactDOM from "react-dom";

import Footer from "./components/Footer";
import "./styles.css";

import { observer } from "mobx-react-lite";
import { UserStore } from "./UserStore";
import { UserList } from "./components/UserList";
import { AddUser } from "./components/AddUser/AddUser";

export const App = observer(() => {
  const [userStore] = useState(() => new UserStore());
  console.log(userStore);

  return (
    <div className="App">
      <AddUser userStore={userStore} />
      <hr />
      <UserList userStore={userStore} />
      {/* <Footer remaining={store.remainingTodos} total={store.todos.length} /> */}
    </div>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
