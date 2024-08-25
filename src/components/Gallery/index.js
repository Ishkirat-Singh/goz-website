import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { urlFor } from "../../../sanity";

const GalleryDisplay = ({ gallery }) => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Stack mt={-8}>
      <Container maxWidth="lg">
        <ImageList cols={isXs ? 2 : 3} gap={16}>
          {gallery.map((image) => (
            <ImageListItem
              component="a"
              href={urlFor(image.image).url()}
              target="_blank"
              sx={{
                boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.03)",
              }}
              key={image.title}
            >
              <img
                src={`${urlFor(image.image).url()}?w=248&fit=crop&auto=format`}
                srcSet={`${urlFor(
                  image.image
                ).url()}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={image.title}
                loading="lazy"
              />
              <ImageListItemBar title={image.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Stack>
  );
};

export default GalleryDisplay;
