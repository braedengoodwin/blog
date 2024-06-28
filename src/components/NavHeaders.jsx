import { Link } from "react-router-dom";

const NavHeaders = ({ className, onClick, title, active, to }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default NavHeaders;
