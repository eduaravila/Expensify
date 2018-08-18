import { firebase, provider } from "../../firebase/firebase";

export const ingresarConGoogle = () => {
  return () => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {})
      .catch(err => {});
  };
};

export const logoutconGoogle = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const login = uuid => ({
  type: "LOGIN",
  uuid
});

export const logOut = () => ({
  type: "LOGOUT"
});
