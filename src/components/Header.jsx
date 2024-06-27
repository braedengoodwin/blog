import test from "../assets/colorPic.png";
import NavHeaders from "./NavHeaders";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-lg">
      <div className="flex flex-col items-center w-4/5 md:w-1/2 border-b-4 border-[#324923]">
        <img
          src={test}
          width={100}
          height={60}
          alt="Profile"
          className="mb-10"
        />
        <div className="flex flex-row gap-4">
          <NavHeaders
            title="Main"
            className="mb-2 text-[#324923] text-2xl hover:text-[#99A491]"
            to="/"
          />
          <NavHeaders
            title="Thoughts"
            className="mb-2 text-[#324923] text-2xl hover:text-[#99A491]"
          />
          <NavHeaders
            title="Media"
            className="mb-2 text-[#324923] text-2xl hover:text-[#99A491]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
