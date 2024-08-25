import { Grid, Container, Typography, Button, Stack } from "@mui/material";
import CtaImg from "./cta-img.png";
import Image from "next/image";

const CtaSection = () => {
  return (
    <Container
      sx={{
        my: {
          xs: 5,
          sm: 10,
        },
        mb: {
          xs: 10,
          sm: 10,
        },
      }}
      maxWidth="xl"
    >
      <Grid
        container
        // direction={{
        //   xs: "row-reverse",
        //   sm: "row",
        // }}
        spacing={5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h3">
              Global Olympiad Zone
              <br />
              Your Gateway to Language Mastery!
            </Typography>

          <Typography mb={1.5} mt={2} color="GrayText" lineHeight={2}>
            Committing towards the <b>multilingual</b> society and nation <br />
            Give olympiads anywhere, anytime. <br />
            {/* <b style={{ fontSize: 22 }}>
              "Do something drastic - zero wastage of paper!"
            </b> */}
          </Typography>
          {/* <Stack direction="row" spacing={2}>
            <Button
              component="a"
              href="https://student.globalolympiadzone.co.in/"
              target="_blank"
              sx={{
                boxShadow: "10px 10px 25px rgba(233, 106, 85, 0.25)",
                px: 4,
                py: 1.25,
              }}
              disableElevation
              size="large"
              variant="contained"
            >
              Student login
            </Button>
            <Button
              component="a"
              href="https://goz-admin.web.app/"
              target="_blank"
              sx={{
                border: "1px solid",
                borderColor: "primary.main",
                px: 4,
                py: 1.25,
              }}
              disableElevation
              size="large"
              variant="outlined"
            >
              Facilitator login
            </Button>
          </Stack> */}
          <Stack mt={5} spacing={4} direction="row">
            <Stack>
              <Typography variant="h4">2k+</Typography>
              <Typography color="GrayText">Students</Typography>
            </Stack>
            <Stack>
              <Typography variant="h4">8+</Typography>
              <Typography color="GrayText">Subjects</Typography>
            </Stack>
            <Stack>
              <Typography variant="h4">200+</Typography>
              <Typography color="GrayText">Olympiads</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          display={{
            xs: "none",
            sm: "flex",
          }}
          container
          justifyContent="flex-end"
          item
          xs={12}
          sm={6}
          sx={{
            "& img": {
              maxHeight: 550,
            },
          }}
        >
          <Image src={CtaImg} alt="Cta img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaSection;
