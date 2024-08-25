import { Divider, Grid, Stack } from "@mui/material";

// Icons
import CuetIcon from "./images/cuet.png";
import EnglishIcon from "./images/english.png";
import FrenchIcon from "./images/french.png";
import GermanIcon from "./images/german.png";
import GKIcon from "./images/gk.png";
import HindiIcon from "./images/hindi.png";
import MathsIcon from "./images/maths.png";
import SanskritIcon from "./images/sanskrit.png";
import ScienceIcon from "./images/science.png";
import SubjectCard from "./SubjectCard";

const subjects = [
  {
    name: "English",
    Icon: EnglishIcon,
  },
  {
    name: "French",
    Icon: FrenchIcon,
  },
  {
    name: "German",
    Icon: GermanIcon,
  },
  {
    name: "G.K",
    Icon: GKIcon,
  },
  {
    name: "Hindi",
    Icon: HindiIcon,
  },
  {
    name: "Maths",
    Icon: MathsIcon,
  },
  {
    name: "Sanskrit",
    Icon: SanskritIcon,
  },
  {
    name: "Science",
    Icon: ScienceIcon,
  },
];

const SubjectsGrid = () => {
  return (
    <Stack mt={-5}>
      <Grid container spacing={{ xs: 2.5, sm: 5 }}>
        {subjects.map((sub) => (
          <SubjectCard key={sub.name} Icon={sub.Icon} name={sub.name} />
        ))}
      </Grid>
      <Divider
        sx={{
          my: 5,
        }}
      />
      <Grid container spacing={5}>
        <SubjectCard name="CUET" Icon={CuetIcon} />
      </Grid>
    </Stack>
  );
};

export default SubjectsGrid;
