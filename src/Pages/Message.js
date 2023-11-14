import React from "react";
import { FcSms } from "react-icons/fc";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

export default function Message() {
  return (
    <div className="message-container">
      <Confetti width={1500} height={500} className="confetti" />
      <FcSms />
      <h1>Your form has been submited successfully. Thanks</h1>
      <Link to="/">Submit another form</Link>
    </div>
  );
}
