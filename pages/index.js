import About from "../src/components/Homepage/About";
import Advisory from "../src/components/Homepage/Advisory";
import CtaSection from "../src/components/Homepage/Cta";
import Features from "../src/components/Homepage/Features";
import PartnerSchools from "../src/components/Homepage/PartnerSchools";
import PlatformInfo from "../src/components/Homepage/PlatformInfo";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import NotificationBar from "../src/components/layout/Navbar/NotificationBar";
import Info from "../src/components/Homepage/Info";
import Teacher from "../src/components/Homepage/Teachers";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <NotificationBar />
      <CtaSection />
      <Info />
      <Features />
      <About />
      <PartnerSchools />
      <Advisory />
      <Teacher />
      <PlatformInfo />
      <Footer />
    </>
  );
};

export default Homepage;
