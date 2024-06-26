import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <div className="bg-[#f3e8d2] h-screen overflow-hidden">
        <div className="pt-[4.75rem] lg:pt-[5.25rem] ">
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default App;
