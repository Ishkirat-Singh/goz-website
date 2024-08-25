import { Container, Stack, Typography } from "@mui/material";
import { sanityClient } from "../../sanity";
import Blog from "../../src/components/Blog";
import Footer from "../../src/components/layout/Footer";
import Navbar from "../../src/components/layout/Navbar";

const BlogPage = ({ articles }) => {
  return (
    <>
      <Stack bgcolor="#F2F7FB" color="#3C4852">
        <Navbar />
        <Container maxWidth="lg">
          <Typography
            align="center"
            fontWeight={700}
            className="grot"
            variant="h2"
            mt={3}
            mb={15}
          >
            Blog
          </Typography>
        </Container>
      </Stack>

      <Blog articles={articles} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "articles"] {
        ...
        }`;

  const result = await sanityClient.fetch(query);
  return {
    props: {
      articles: result,
    },
    revalidate: 60,
  };
};

export default BlogPage;
