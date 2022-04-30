import { observer } from "mobx-react-lite";
import React from "react";

export const UserList = observer(({ userStore }) => {
  console.log(userStore);
  return (
    <ul data-testid="todoList" style={{ listStyle: "none" }}>
      {userStore.users &&
        userStore.users.map((t, i) => (
          <div className="row" key={t.id}>
            <div className="column">{t.text}</div>
            <div className="column">
              <input
                type="checkbox"
                checked={t.email}
                onChange={() => {
                  userStore.toggleEmail(i);
                }}
              />
            </div>
            <div className="column">
              <input
                type="checkbox"
                checked={t.sms}
                onChange={() => {
                  userStore.toggleSms(i);
                }}
              />
            </div>
            <div className="column">
              <input
                type="checkbox"
                checked={t.newsletter}
                onChange={() => {
                  userStore.toggleNewsLetter(i);
                }}
              />
            </div>
          </div>
        ))}
    </ul>
  );
});
