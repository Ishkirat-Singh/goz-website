import { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import advisories from "./advisories";
import CircleIcon from "@mui/icons-material/RadioButtonUnchecked";
import ActiveCircleIcon from "@mui/icons-material/RadioButtonChecked";

const Advisory = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const advisory = advisories[currentIdx];

  return (
    <Stack bgcolor="#F8F8F8">
      <Container
        maxWidth="lg"
        sx={{
          my: 10,
        }}
      >
        <Stack
          spacing={0.5}
          mb={{
            xs: 10,
            sm: 6,
          }}
          alignItems="center"
        >
          <Typography className="grot" fontWeight={700} variant="h2">
            Advisory
          </Typography>
          <Typography>Our honourable experts</Typography>
        </Stack>

        <Grid alignItems="center" container spacing={{ xs: 4, sm: 8 }}>
          <Grid item xs={12} sm={4}>
            <Stack alignItems="center">
              <Stack
                sx={(theme) => ({
                  borderRadius: 50,
                  [theme.breakpoints.only("xs")]: {
                    width: "70%",
                  },
                })}
              >
                <Image src={advisory.pic} alt={advisory.name} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography lineHeight={2}>{advisory.writeup}</Typography>
            <Stack mt={2} alignItems="flex-end">
              <Typography fontWeight={700}>{advisory.name}</Typography>
              <Typography fontWeight={700}>{advisory.school}</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack mt={3} direction="row" justifyContent="center" spacing={1}>
          {Array.from(Array(advisories.length)).map((a, idx) =>
            idx === currentIdx ? (
              <ActiveCircleIcon
                key={idx}
                sx={{
                  cursor: "pointer",
                }}
                fontSize="18px"
              />
            ) : (
              <CircleIcon
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                sx={{
                  cursor: "pointer",
                }}
                fontSize="18px"
              />
            )
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Advisory;
