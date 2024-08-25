import { Avatar, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const About = () => {
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
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={5}>
          <Stack
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
              About us
            </Typography>
            <Typography className="grot" variant="h4">
              A platform to revolutionize the experience of online olympiad
              participation
            </Typography>
          </Stack>
          <Stack
            display={{
              xs: "none",
              sm: "flex",
            }}
            spacing={2}
            direction="row"
          >
            <Avatar />
            <Stack>
              <Typography>
                I've used multiple olympiad platforms and I can vouch that GOZ
                is the best one out there
              </Typography>
              <Typography mt={1}>Abhishek (Student)</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Stack
            spacing={{
              xs: 2,
              sm: 4,
            }}
            color="grey"
          >
            <Typography>
              The GOZ has, for a long time, been fascinated only by the crux of
              multiple languages. This has induced the need for an external
              platform that provides the opportunity to apply these formations
              and build a deep understanding of the core concepts learned in
              school.{" "}
            </Typography>
            <Typography>
              Olympiads are competitive examinations conducted nationally and
              internationally and have proved to be such platforms that allow
              students to test their mettle in different subjects. These exams
              focus on the application of concepts learned in the classroom. The
              exams are designed in such a way that the students are forced to
              apply multiple concepts simultaneously to arrive at the answers.
              This not only sharpens their skill but also builds in them a deep
              appreciation of the subject.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
