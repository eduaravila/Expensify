import {
  ingresarConGoogle,
  logoutconGoogle,
  login,
  logOut
} from "../../../reducer/actions/auth";

describe("AUTH reducer actions", () => {
  test("login test", () => {
    expect(login("0000")).toEqual({ type: "LOGIN", uudi: "0000" });
  });
});
