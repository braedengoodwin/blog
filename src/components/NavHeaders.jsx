import { Link } from "react-router-dom";

const NavHeaders = ({ className, onClick, title, active, to }) => {
  return (
    <Link className={className} to={to}>
      {title}
    </Link>
  );
};

export default NavHeaders;
