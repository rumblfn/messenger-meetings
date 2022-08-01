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

  return <h4>Trying to login</h4>;
};

export default PrivateRoute;
