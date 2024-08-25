import { Container } from "@mui/system";
import Navbar from "../src/components/layout/Navbar";
import Image from "next/image";

import AboutUs from "../src/components/AboutUs";
import MissionVision from "../src/components/AboutUs/MissionVision";
import Faqs from "../src/components/AboutUs/Faqs";
import Footer from "../src/components/layout/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          my: 13,
          color: "#3C4852",
          px: { xs: 3, sm: 2 },
        }}
        maxWidth="lg"
      >
        <Image src="/logo.svg" width={143} height={122} />
        <AboutUs />
        <MissionVision />
        <Faqs />
      </Container>
      <Footer />
    </>
  );
};

export default AboutUsPage;
