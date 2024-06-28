import me from "../assets/me.jpg";
import NavHeaders from "./NavHeaders";

const Header = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-lg">
      <div className="flex flex-col items-center w-4/5 md:w-1/2 border-b-4 border-[#324923]">
        <img
          src={me}
          width={100}
          height={60}
          alt="Profile"
          className="mb-10 rounded-md"
        />
        <div className="flex flex-row gap-4">
          <NavHeaders
            title="Main"
            className={`mb-2 text-2xl  ${
              selectedTab === "main" ? "text-[#324923]" : "text-[#99A491]"
            }`}
            onClick={() => setSelectedTab("main")}
          />
          <NavHeaders
            title="Thoughts"
            className={`mb-2 text-2xl  ${
              selectedTab === "thoughts" ? "text-[#324923]" : "text-[#99A491]"
            }`}
            onClick={() => setSelectedTab("thoughts")}
          />
          <NavHeaders
            title="Media"
            className={`mb-2 text-2xl  ${
              selectedTab === "media" ? "text-[#324923]" : "text-[#99A491]"
            }`}
            onClick={() => setSelectedTab("media")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
