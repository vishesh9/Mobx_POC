import { observer } from "mobx-react-lite";
import React from "react";

export const UserList = observer(({ userStore }) => {
  console.log(userStore);
  return (
    <>
      <h2>Users</h2>
      <div className="row">
        <div className="column">Name</div>
        <div className="column">Email</div>
        <div className="column">SMS</div>
        <div className="column">Newsletter</div>
      </div>
      {userStore.users &&
        userStore.users.map((t, i) => (
          <div className="row" key={t.id}>
            <div className="column">{t.name}</div>
            <div className="column">
              <input
                type="checkbox"
                checked={t.email}
                // onChange={() => {
                //   userStore.toggleEmail(i);
                // }}
              />
            </div>
            <div className="column">
              <input
                type="checkbox"
                checked={t.sms}
                // onChange={() => {
                //   userStore.toggleSms(i);
                // }}
              />
            </div>
            <div className="column">
              <input
                type="checkbox"
                checked={t.newsletter}
                // onChange={() => {
                //   userStore.toggleNewsLetter(i);
                // }}
              />
            </div>
          </div>
        ))}
    </>
  );
});
