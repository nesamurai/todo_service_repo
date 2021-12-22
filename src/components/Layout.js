import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/todos">Todos</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
