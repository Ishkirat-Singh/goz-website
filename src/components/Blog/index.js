import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Article from "./ArticleCard";

const Blog = ({ articles }) => {
  return (
    <Stack mt={-10}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {articles.map((article) => (
            <Article key={article._id} {...article} />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default Blog;
