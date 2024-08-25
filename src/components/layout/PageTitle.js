import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "./Navbar";

const PageTitle = ({ title }) => {
  return (
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
          {title}
        </Typography>
      </Container>
    </Stack>
  );
};

export default PageTitle;
