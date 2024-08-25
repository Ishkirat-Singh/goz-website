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
import aksipsImg from "./images/aksips.png";
import bombayscottImg from "./images/bombay-scottish.png";
import dpsgbnImg from "./images/dpsgbnlogo.png";
import edifyworldImg from "./images/edifyworld.png";
import manthanImg from "./images/manthan-logo.png";
import rpsImg from "./images/rps-logo.png";
import sarvottamImg from "./images/sarvottam.jpg";
import wisdomhighImg from "./images/wisdom-high-logo.png";
 
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
        <Stack mx={5}>
          <Image src={aksipsImg} />
        </Stack>
        {/* <Stack mx={4}>
          <Image src={dpsgbnImg} />
        </Stack> */}
        <Stack mx={5}>
          <Image src={bombayscottImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={edifyworldImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={manthanImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={rpsImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={sarvottamImg} />
        </Stack>
        <Stack mx={5}>
          <Image src={wisdomhighImg} />
        </Stack>

      </Marquee>
    </Stack>
  );
};

export default PartnerSchools;
