import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Footer from "../../src/components/layout/Footer";
import Navbar from "../../src/components/layout/Navbar";
import PageTitle from "../../src/components/layout/PageTitle";
import SubjectsGrid from "../../src/components/Subjects/SubjectsGrid";

const Subjects = () => {
  return (
    <>
      <PageTitle title="Subjects" />
      <Container maxWidth="lg">
        <SubjectsGrid />
      </Container>
      <Footer />
    </>
  );
};

export default Subjects;
