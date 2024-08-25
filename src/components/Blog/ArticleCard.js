import { Grid, Stack, Typography } from "@mui/material";
import { urlFor } from "../../../sanity";
import { useRouter } from "next/router";

const ArticleCard = ({ thumbnail, slug, title, excerpt }) => {
  const router = useRouter();
  return (
    <Grid item xs={4}>
      <Stack
        onClick={() => router.push(`/blog/${slug.current}`)}
        height="100%"
        sx={{
          cursor: "pointer",
          transition: ".2s",
          ":hover": {
            transform: "scale(1.015)",
          },
        }}
        bgcolor="white"
        boxShadow="0px 5px 20px rgba(0, 0, 0, 0.08)"
        borderRadius={1.5}
        overflow="hidden"
      >
        <Stack
          height={240}
          sx={{
            background: `url(${urlFor(thumbnail).url()})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Stack p={2} maxWidth="100%" overflow="hidden" textOverflow="ellipsis">
          <Typography variant="h6">{title}</Typography>
          <Typography
            lineHeight={1.7}
            maxHeight={100}
            overflow="hidden"
            textOverflow="ellipsis"
            variant="body2"
          >
            {excerpt}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default ArticleCard;
