import { Grid, Typography, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import SupportIcon from "./icons/247.png";
import FreeStudyIcon from "./icons/free-study.png";
import AwardsIcon from "./icons/awards.png";
import HighQualityIcon from "./icons/high-quality.png";
import ReportIcon from "./icons/report-card.png";

const Features = () => {
  return (
    <Stack
      p={{
        xs: 3.5,
        sm: 15,
      }}
      py={{
        xs: 8,
        sm: 15,
      }}
      sx={{
        background:
          "url(/features-sec-bg.png), linear-gradient(#1C203E,#1C203E)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} rowSpacing={10} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Image src={FreeStudyIcon} />
              </Stack>
              <Stack>
                <Typography variant="h6">Free study material</Typography>
                <Typography>
                  Specially curated study material by our experienced teachers
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Image src={HighQualityIcon} />
              </Stack>
              <Stack>
                <Typography variant="h6">High quality olympiads</Typography>
                <Typography>
                  Olympiads are prepared by highly qualified group of educators
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Image src={ReportIcon} />
              </Stack>
              <Stack>
                <Typography variant="h6">Report card</Typography>
                <Typography>
                  Every participant will received a performance analysis report
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Image src={AwardsIcon} />
              </Stack>
              <Stack>
                <Typography variant="h6">Awards</Typography>
                <Typography>
                  The prizes worth over Rs.1 cr to be awarded to the students
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Image src={SupportIcon} />
              </Stack>
              <Stack>
                <Typography variant="h6">24/7 Support</Typography>
                <Typography>
                  We are always here to answer your queries
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Features;
