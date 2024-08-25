import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Info = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        my={{
          xs: 3,
          sm: 15,
        }}
        spacing={{
          xs: 2,
          sm: 7,
        }}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={7}>
          <Stack
            spacing={{
              xs: 2,
              sm: 4,
            }}
            mb={{
              xs: 2,
              sm: 8,
            }}
          >
            <Typography
              fontWeight={700}
              color="primary"
              textTransform="uppercase"
            >
              Your Gateway to Language Excellence
            </Typography>
            <Typography variant="body1">
              Get ready to unleash your linguistic potential and conquer
              the world of languages! At Global Olympiad Zone, we
              specialize in thrilling, high-impact Language Olympiads that
              challenge and inspire students from every corner of the
              globe.
            </Typography>
            <Typography variant="body1">
              Whether you're a wordsmith, polyglot, or passionate
              about mastering new languages, our Olympiads are designed
              to push your skills to the next level! With cutting-edge
              competitions, international recognition, and expertly
              crafted challenges, Global Olympiad Zone is
              your ultimate destination for language excellence.
            </Typography>
            <Typography variant="body1">
              Compete, connect, and showcase your talents on a global stage—this is
              your moment to shine!
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Stack
            spacing={{
              xs: 2,
              sm: 4,
            }}
            color="grey.700"
          >
            <Typography fontWeight={700} textTransform={"uppercase"}>
              Why Join Global Olympiad Zone?
            </Typography>
            <Typography variant="body1" component="div">
              <ul>
                <li><strong>World-Class Competitions:</strong> Test your language mastery
                  with top-level challenges!</li>
                <li><strong>Global Recognition:</strong> Earn accolades and awards that set
                  you apart.</li>
                <li><strong>Dynamic Learning:</strong> Discover new languages, sharpen
                  your skills, and grow!</li>
                <li><strong>Global Community:</strong> Connect with language enthusiasts
                  and educators from around the world.</li>
              </ul>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Info;
