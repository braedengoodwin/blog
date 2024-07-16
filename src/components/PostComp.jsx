import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";

const PostComp = ({ title, author, date, summary, paragraph }) => {
  return (
    <div className="bg-[#f3e8d2] h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-lg">
        <div className="flex flex-col items-center md:items-start lg:items-start w-4/5 md:w-1/2 lg:w-2/3">
          <Link
            className="mt-8 mb-16 text-[#99A491] hover:text-[#324923]"
            to="/"
          >
            <BiArrowBack className="inline mb-1" /> BACK
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
            }}
            className="w-4/5"
          >
            <h3 className="font-bold text-4xl text-[#324923]">{title}</h3>
            <h1 className="text-sm text-[#99A491] mt-1">
              By {author} on {date}
            </h1>

            {summary.map((summary, index) => (
              <div key={index} className="mb-10">
                <h2 className="font-semibold text-2xl text-[#324923] mt-5 ">
                  {summary.title}
                </h2>
                <hr className=" border-t-1 border-[#adb6a7] " />
                <p className="mt-4 text-[#324923]">{summary.content} </p>
              </div>
            ))}

            {paragraph.map((paragraph, index) => (
              <div className="mb-10" key={index}>
                <h2 className="font-semibold text-2xl text-[#324923] mt-5 ">
                  {paragraph.title}
                </h2>
                <hr className="border-t-1 border-[#adb6a7]" />
                <p className="mt-4 text-[#324923]">{paragraph.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PostComp;
