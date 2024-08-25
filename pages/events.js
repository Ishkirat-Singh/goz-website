import { Container, Stack, Typography } from "@mui/material";
import { sanityClient } from "../sanity";
import EventsList from "../src/components/EventsList";
import Footer from "../src/components/layout/Footer";
import Navbar from "../src/components/layout/Navbar";
import PageTitle from "../src/components/layout/PageTitle";

const Events = ({ events }) => {
  return (
    <>
      <PageTitle title="Events" />
      <EventsList events={events} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "events"][0] {
      event
      }`;

  const events = await sanityClient.fetch(query);

  return {
    props: {
      events: events.event,
    },
    revalidate: 60,
  };
};

export default Events;
