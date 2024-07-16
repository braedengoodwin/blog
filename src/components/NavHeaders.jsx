import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavHeaders = ({ className, onClick, title, active, to }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={className}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
};

export default NavHeaders;
