import React, { useState } from "react";
export const AddUser = ({ userStore }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(false);
  const [sms, setSms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const resetAll = () => {
    setName("");
    setEmail(false);
    setSms(false);
    setNewsletter(false);
  };

  return (
    <>
      <h2>Add new user</h2>
      <div className="row">
        Name :
        <input
          data-testid="name-input"
          type="text"
          placeholder="Enter name.."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="row">
        Email :
        <input
          data-testid="email-checkbox"
          type="checkbox"
          checked={email}
          onChange={() => {
            setEmail(!email);
            // userStore.toggleEmail(i);
          }}
        />
      </div>
      <div className="row">
        SMS:
        <input
          data-testid="sms-checkbox"
          type="checkbox"
          checked={sms}
          onChange={() => {
            setSms(!sms);
            // userStore.toggleEmail(i);
          }}
        />
      </div>
      <div className="row">
        Newsletter:
        <input
          data-testid="newsletter-checkbox"
          type="checkbox"
          checked={newsletter}
          onChange={() => {
            setNewsletter(!newsletter);
            // userStore.toggleEmail(i);
          }}
        />
      </div>
      <div className="row">
        <button
          data-testid="save-button"
          onClick={() => {
            userStore.addUser({
              name,
              email,
              sms,
              newsletter
            });
            resetAll();
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};
