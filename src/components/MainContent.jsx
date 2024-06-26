import { posts } from "../constants/posts";

const MainContent = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-lg">
      <div className="flex flex-col items-center md:items-start lg:items-start w-4/5 md:w-1/2  mt-8">
        <ul className="">
          {posts.map((item, index) => (
            <li key={index}>
              <h2 className="text-2xl font-bold text-[#324923]">
                {item.title}
              </h2>
              <div className="text-sm text-[#99A491]">{item.date}</div>
              <p className=" text-[#324923] mt-3">{item.lessons}</p>
              <button className="mb-10 mt-2 underline underline-offset-2 hover:text-[#99A491]">
                Read More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
