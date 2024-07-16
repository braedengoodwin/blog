import { Link } from "react-router-dom";
import { motion, AnimatePresence, stagger } from "framer-motion";

const MainContent = ({ posts }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-lg">
      <div className="flex flex-col items-center md:items-start lg:items-start w-4/5 md:w-1/2 mt-8">
        <ul>
          {posts.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: 30, opacity: 0 }}
            >
              <motion.h2 className="text-2xl font-bold text-[#324923]">
                {item.title}
              </motion.h2>
              <h1 className="text-sm text-[#99A491]">{item.date}</h1>
              <p className="text-[#324923] mt-3">
                {item.summary.map((summaryItem, idx) => (
                  <span key={idx}>{summaryItem.title}</span>
                ))}
              </p>
              <Link
                to={`/${item.path}`}
                className="block mb-10 mt-2 underline underline-offset-2 text-[#324923] hover:text-[#99A491]"
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  Read More
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
