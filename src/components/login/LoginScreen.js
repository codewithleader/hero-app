import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const loginAction = {
    type: types.login,
    payload: {
      name: "Elis Antonio",
    },
  };
  const handleLogin = () => {
    dispatch(loginAction);

    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <div className="d-grid gap-2 col-md-4 col-sm-6 mx-auto">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control mb-3"
          value={loginAction.payload.name}
          disabled
        />
        <button className="btn btn-outline-light btn-lg" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
