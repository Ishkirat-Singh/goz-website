import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import CallImage from "./images/call.png";

const CallUs = () => {
  return (
    <Container
      sx={{
        mt: 5,
      }}
      maxWidth="md"
    >
      <Stack
        p={5}
        bgcolor="#fff"
        boxShadow="0px 12px 40px rgba(0, 0, 0, 0.05)"
        borderRadius={2}
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={{
          xs: 4,
          sm: 0,
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack>
          <Typography fontWeight={700} variant="h5">
            Have questions about GOZ?
          </Typography>
          <Typography color="#828282" mt={1} mb={2}>
            Our experts can answer all your questions
          </Typography>
          <Typography
            textAlign={{
              xs: "center",
              sm: "left",
            }}
            fontWeight={700}
          >
            Call us +91 8700933955
          </Typography>
        </Stack>
        <Stack>
          <Image width={130} height={110} src={CallImage} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CallUs;
