import Auth from "../../../reducer/reducers/auth";

describe("AUTH reducer", () => {
  test("login", () => {
    expect(Auth({}, { type: "LOGIN", uuid: "fffff" })).toEqual({
      uuid: "fffff"
    });
  });

  test("logOut", () => {
    expect(Auth({}, { type: "LOGOUT" })).toEqual({});
  });
});
