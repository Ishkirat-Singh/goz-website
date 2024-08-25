import { Grid, Stack, Typography, Link as MuiLink } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          my={{
            xs: 4,
            sm: 8,
          }}
          container
          spacing={5}
          color="#647585"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={4}>
            <Image src="/logo.png" width={55} height={47} />
            <Typography>
              Best place to enhance your learning. Top-quality content, created
              by experience instructors and teachers.
            </Typography>
            <Typography fontWeight={700} mt={4}>
              Need help?
            </Typography>
            <Typography>
              Call us and we will answer all your questions
            </Typography>

            <Stack mt={2} direction="row" spacing={2} alignItems="center">
              <CallIcon />
              <Typography fontWeight={700}>
                Contact numbers (10:30 - 17:00)
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight={700}>+91 8700933955</Typography>
              <Typography fontWeight={700}>+91 9625517878</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            justifyContent={{
              xs: "spacing-between",
              sm: "flex-end",
            }}
          >
            <Grid item xs sm={3}>
              <Stack>
                <Typography fontWeight={700}>Study material</Typography>
                <Link passHref href="/subjects/science">
                  <MuiLink>Science</MuiLink>
                </Link>
                <Link passHref href="/subjects/maths">
                  <MuiLink>Mathematics</MuiLink>
                </Link>
                <Link passHref href="/subjects/french">
                  <MuiLink>French</MuiLink>
                </Link>
                <Link passHref href="/subjects/english">
                  <MuiLink>English</MuiLink>
                </Link>
                <Link passHref href="/subjects/hindi">
                  <MuiLink>Hindi</MuiLink>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs sm={3}>
              <Stack>
                <Typography fontWeight={700}>Company</Typography>
                <Link passHref href="/about-us">
                  <MuiLink>About</MuiLink>
                </Link>
                <Link passHref href="/blog">
                  <MuiLink>Blog</MuiLink>
                </Link>
                <Link passHref href="/subjects">
                  <MuiLink>Subjects</MuiLink>
                </Link>
                <Link passHref href="/date-sheet">
                  <MuiLink>Date sheet</MuiLink>
                </Link>
                <Link passHref href="/events">
                  <MuiLink>Events</MuiLink>
                </Link>
                <Link passHref href="/gallery">
                  <MuiLink>Gallery</MuiLink>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Stack
        textAlign={{
          xs: "center",
          sm: "start",
        }}
        p={1.5}
        px={4}
        bgcolor="#1C203E"
        color="#fff"
      >
        © 2023 Intellectual Hours Edu Pvt ltd
      </Stack>
    </>
  );
};

export default Footer;
