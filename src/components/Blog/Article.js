import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { PortableText } from "@portabletext/react";
import format from "date-fns/format";

const Article = ({ article }) => {
  return (
    <Container maxWidth="lg">
      <Stack
        mt={4}
        mb={8}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography width="70%" variant="h3" lineHeight={1.5}>
          {article.title}
        </Typography>
        <Typography align="right">
          {format(new Date(article._createdAt), "dd MMMM yyyy")}
        </Typography>
      </Stack>
      <Stack>
        <PortableText
          value={article.content}
          components={{
            types: {
              image: ({ value }) => (
                <Stack
                  sx={{
                    "& img": {
                      width: "100%",
                    },
                  }}
                >
                  <img src={urlFor(value).url()} />
                </Stack>
              ),
            },
          }}
        />
      </Stack>
    </Container>
  );
};

export default Article;
