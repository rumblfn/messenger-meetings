import { useContext } from "react";
import { AccountContext } from "../AccountContext";
import React from "react";
import Room from "../Room/Room";

const PrivateRoute = (props) => {
  const { user } = useContext(AccountContext);
  const roomId = props.computedMatch.params.roomId

  if (user.loggedIn) {
    return <Room currentUser={user.username} roomId={roomId} />;
  }

  if (user.loggedIn === false) {
    window.open(`${process.env.REACT_APP_MAIN_URL}`, "_blank");
  }

  return null;
};

export default PrivateRoute;
