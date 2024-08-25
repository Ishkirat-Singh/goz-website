import { sanityClient } from "../sanity";
import GalleryDisplay from "../src/components/Gallery";
import Footer from "../src/components/layout/Footer";
import PageTitle from "../src/components/layout/PageTitle";

const GalleryPage = ({ gallery }) => {
  return (
    <>
      <PageTitle title="Gallery" />
      <GalleryDisplay gallery={gallery} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type == "gallery"] {
    ...
    }`;

  const gallery = await sanityClient.fetch(query);

  return {
    props: {
      gallery: gallery,
    },
    revalidate: 60,
  };
};

export default GalleryPage;
