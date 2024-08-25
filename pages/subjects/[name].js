import { Stack } from "@mui/material";
import Navbar from "../../src/components/layout/Navbar";
import Footer from "../../src/components/layout/Footer";
import Grades from "../../src/components/Subject/Grades";
import SubjectTop from "../../src/components/Subject/SubjectTop";
import CallUs from "../../src/components/layout/CallUs";
import { sanityClient } from "../../sanity";

const Subject = ({ subject }) => {
  return (
    <>
      <Stack
        sx={{
          background:
            "url(/subject-page-bg.png), linear-gradient(#F2F7FB,#F2F7FB)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
        color="#3C4852"
      >
        <Navbar />
        <SubjectTop
          name={subject.name}
          nameToDisplay={subject.nameToDisplay}
          description={subject.description}
        />
      </Stack>
      <Grades grades={subject.grades} />
      <CallUs />
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "subject"] {
    name
    }`;

  const result = await sanityClient.fetch(query);

  const paths = result.map((res) => ({
    params: { name: res.name },
  }));

  return {
    paths,
    // figure out this shit
    fallback: "blocking", // can also be true or 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const name = params.name;
  const query = `*[_type == "subject" && name == $name][0] {
    name,
    nameToDisplay,
      description,
      grades
    }`;

  const result = await sanityClient.fetch(query, {
    name,
  });

  if (!result)
    return {
      notFound: true,
    };

  return {
    props: {
      subject: result,
    },
    revalidate: 60,
  };
};

export default Subject;
