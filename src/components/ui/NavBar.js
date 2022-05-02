import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  

  const navigate = useNavigate();

  /**
   * When the user clicks the logout button, dispatch the logout action, and then navigate to the login
   * page.
   */
  const handleLogout = () => {
    const logoutAction = {
      type: types.logout,
    }
    dispatch(logoutAction);
   navigate('/login', {
    replace: true
  });
 }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand mx-2" to="/">
        HeroApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink            
            className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink            
            className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')}
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink            
            className={({isActive}) => "nav-item nav-link" + (isActive ? ' active' : '')}
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
     <ul className="navbar-nav ml-auto">
      <span className="nav-item nav-link text-info">
       { user.name }
      </span>
          <button            
       className="nav-item nav-link btn mx-2"
       onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
