import {
  ingresarConGoogle,
  logoutconGoogle,
  login,
  logOut
} from "../../../reducer/actions/auth";
import { firebase } from "../../../firebase/firebase";
jest.setTimeout(30000);

describe("AUTH reducer actions", () => {
  test("login test", () => {
    expect(login("0000")).toEqual({ type: "LOGIN", uuid: "0000" });
  });
  test("logOut test", () => {
    expect(logOut()).toEqual({ type: "LOGOUT" });
  });
  
  test("ingresar con google ", done => {
    ingresarConGoogle();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        expect(user).toEqual(true);
        done()
      }
    });
  });
});
