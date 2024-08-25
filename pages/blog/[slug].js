import { Stack } from "@mui/material";
import { sanityClient, urlFor } from "../../sanity";
import Navbar from "../../src/components/layout/Navbar";
import Article from "../../src/components/Blog/Article";
import Footer from "../../src/components/layout/Footer";

const ArticlePage = ({ article }) => {
  return (
    <>
      <Navbar />
      <Stack
        width="100%"
        sx={{
          "& > img": {
            width: "100%",
          },
        }}
      >
        <img src={urlFor(article.banner).url()} alt={article.title} />
      </Stack>
      <Article article={article} />
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "articles"] {
        _id,
        slug {
            current
        }
        }`;

  const result = await sanityClient.fetch(query);

  const paths = result.map((res) => ({
    params: { slug: res.slug.current },
  }));

  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const slugUrl = params.slug;

  const query = `*[_type == "articles" && slug.current == $slug ][0] {
        _id,
        title,
        excerpt,
        banner,
        content,
        _createdAt,
        slug {
            current
            }
        }`;

  const article = await sanityClient.fetch(query, { slug: slugUrl });

  if (!article) return { notFound: true };

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
};
export default ArticlePage;
