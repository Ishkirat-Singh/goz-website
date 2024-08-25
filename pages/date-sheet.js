import { Container, Stack, Typography } from "@mui/material";
import { sanityClient } from "../sanity";
import DateSheetTable from "../src/components/DateSheet/Table";
import Footer from "../src/components/layout/Footer";
import Navbar from "../src/components/layout/Navbar";
import PageTitle from "../src/components/layout/PageTitle";

const DateSheet = ({ dates }) => {
  return (
    <>
      <PageTitle title="Date sheet" />
      <DateSheetTable dates={dates} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "dateSheet"][0] {
      ...
      }`;

  const result = await sanityClient.fetch(query);
  return {
    props: {
      dates: result.dates,
    },
    revalidate: 60,
  };
};

export default DateSheet;
