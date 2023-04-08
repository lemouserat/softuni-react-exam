import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <>
      <div className="sidebar-navigation hidde-sm hidden-xs">
        <div className="logo">
          <Link to="/">
            Travel<em>blog</em>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <span className="rect"></span>
                <span className="circle"></span>
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs">
                <span className="rect"></span>
                <span className="circle"></span>
                Blogs{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery">
                <span className="rect"></span>
                <span className="circle"></span>
                Gallery{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">
                <span className="rect"></span>
                <span className="circle"></span>
                About us{" "}
              </NavLink>
            </li>
            {!isAuthenticated && (
              <>
                <li>
                  <NavLink to="/login">
                    <span className="rect"></span>
                    <span className="circle"></span>
                    Login{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register">
                    <span className="rect"></span>
                    <span className="circle"></span>
                    Register{" "}
                  </NavLink>
                </li>
              </>
            )}
            {isAuthenticated && (
              <>
                <li>
                  <NavLink to="/add-blog">
                    <span className="rect"></span>
                    <span className="circle"></span>
                    Add Blog post{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-profile">
                    <span className="rect"></span>
                    <span className="circle"></span>
                    My profile - {userEmail}{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/logout">
                    <span className="rect"></span>
                    <span className="circle"></span>
                    Logout{" "}
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
