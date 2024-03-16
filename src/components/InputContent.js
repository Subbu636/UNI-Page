import React, { useState } from "react";

const InputContent = ({ pos }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  return (
    <div
      className="phone-input-conatiner"
      style={
        pos === "bottom"
          ? {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0",
              background: "lightgrey",
              position: "absolute",
              bottom: "0",
              width: "100vw",
            }
          : {}
      }
    >
      <div className="phone-input">
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter Phone Number"
        />
        <button
          className="apply-button"
          disabled={!(checkbox && phoneNumber.length === 10)}
          onClick={() => console.log(phoneNumber)}
        >
          Apply Now
        </button>
      </div>
      <div className="terms-checkbox">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
        <div className="terms-text">
          You agree to be contacted by Uni Cards over Call, SMS, Email or
          WhatsApp to guide you through your application.
        </div>
      </div>
    </div>
  );
};

export default InputContent;
