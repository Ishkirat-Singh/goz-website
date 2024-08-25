import { Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

import Image from "next/image";
import AravaliImg from "./images/aravali.png";
import BirlaImg from "./images/birla-open-minds-logo.png";
import DpsImg from "./images/dpsvk.png";
import ModernImg from "./images/modern.png";
import PresidiumImg from "./images/presidium.png";
import QueenConventImg from "./images/queen-convent.png";
import QueenmaryImg from "./images/queenmary.png";
import StStephenImg from "./images/st-stephen.png";
import TantiaImg from "./images/tantia.png";
import VivekanandImg from "./images/vivekanand.png";

const PartnerSchools = () => {
  return (
    <Stack my={20}>
      <Typography mb={6} align="center" variant="h4">
        Our partners
      </Typography>

      <Marquee>
        <Stack mx={5}>
          <Image src={AravaliImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={BirlaImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={DpsImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={ModernImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={PresidiumImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={QueenConventImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={QueenmaryImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={StStephenImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={TantiaImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={VivekanandImg} />
        </Stack>
      </Marquee>
    </Stack>
  );
};

export default PartnerSchools;
