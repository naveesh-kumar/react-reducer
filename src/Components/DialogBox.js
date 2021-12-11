import React from "react";

function DialogBox({ dispatch, message }) {
  const removeMsg = () => {
    setTimeout(() => {
      dispatch({
        type: "REMOVE_PROD_MSG",
      });
    }, 3000);
  };

  return (
    <div>
      <h6>
        {message}
      </h6>
      {removeMsg()}
    </div>
  );
}

export default DialogBox;
