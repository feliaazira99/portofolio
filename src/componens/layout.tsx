import Footer from "./footer";
import LandingPage from "../features/landing-page";
import Navbar from "./navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div>
          <LandingPage />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
