import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

const App = () => {
  return (
    <div className="md:mb-0 mb-14">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;
