import { Divider, Typography, Grid, Stack, Button } from "@mui/material";

import PlatformScreenshot from "./screenshot.png";
import Image from "next/image";

const PlatformInfo = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#1C203E",
        backgroundPosition: "left bottom",
        backgroundSize: "contained",
        backgroundRepeat: "no-repeat",
      }}
      color="white"
      py={8}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Stack
            ml={3}
            mr={{
              xs: 4,
              sm: 0,
            }}
            alignItems="flex-start"
          >
            <Stack mb={4} direction="row" spacing={2} alignItems="center">
              <Divider
                flexItem
                sx={{
                  bgcolor: "white",
                  width: 70,
                  height: 1,
                }}
              />
              <Typography
                lineHeight={0}
                textTransform="uppercase"
                fontSize={14}
              >
                Enhanced Learning
              </Typography>
            </Stack>
            <Typography mb={2} fontSize="4rem" variant="h1" lineHeight={1.15}>
              <b>CUET - REVISIONARY TEST SERIES FOR GRADE XII.</b>
            </Typography>
            <Typography color="primary.light" fontSize={18} fontWeight={700}>
              Lead the way! We welcome schools to be a part of the wonderful
              journey of CUET - REVISIONARY TEST SERIES FOR GRADE XII. WHY
              REVISIONARY TEST SERIES ?
            </Typography>
            <Typography>
              ● Get an idea of what to expect on ‘D-Day’
              <br /> ● Analyse your preparation and performance
              <br /> ● Helps you try and test different strategies
              <br /> ● Helps you to know how to use time efficiently
              <br /> ● Know your mastery and areas where you fall short
              <br /> ● Reduces your pre-exam nervousness
              <br /> ● Helps you keep a track of your progress. Highlights
            </Typography>
            <Typography
              mt={2}
              color="primary.light"
              fontSize={18}
              fontWeight={700}
            >
              Highlights
            </Typography>
            ● UGC initiative- sole pan-India exam.
            <br /> ● 1.49 million students will register.
            <br /> ● 90 central government universities.
            <br /> ● 24 online exams in one week.
            <Button
              sx={{
                px: 5,
                py: 1.5,
                mt: 4,
              }}
              disableElevation
              size="large"
              variant="contained"
            >
              Get started
            </Button>
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
          xs={6}
          sx={{
            "& img": {
              maxHeight: 650,
            },
          }}
        >
          <Image src={PlatformScreenshot} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PlatformInfo;
