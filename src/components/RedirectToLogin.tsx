import React, { useEffect, useContext } from 'react';
import { IonRouterContext } from '@ionic/react';
import { useHistory } from "react-router";
interface RedirectToLoginProps {
  setIsLoggedIn: Function;
  setUsername: Function;
}

const RedirectToLogin: React.FC<RedirectToLoginProps> = ({ setIsLoggedIn, setUsername }) => {
  const history = useHistory()
  const ionRouterContext = useContext(IonRouterContext);
  useEffect(() => {
    setIsLoggedIn(false);
    setUsername(undefined);
    history.push('/schedule')
  }, [setIsLoggedIn, setUsername, ionRouterContext, history]);
  return null;
};

export default RedirectToLogin;
