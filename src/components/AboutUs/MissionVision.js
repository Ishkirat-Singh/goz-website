import { Stack, Typography } from "@mui/material";

const MissionVision = () => {
  return (
    <Stack my={10}>
      <Typography fontWeight={700} className="grot" mb={2} variant="h2">
        Mission &amp; Vision
      </Typography>
      <Typography>
        Mission : We strive to prepare all students to become lifelong learners
        and responsible citizens ready to meet the challenges of the future. In
        partnership with families and community, our goal is to create relevant
        learning opportunities for students — both inside and outside the
        classroom — that help them develop the knowledge, critical thinking
        skills, and character necessary to succeed in a technologically advanced
        world. Vision : Our vision is to empower students to acquire,
        demonstrate, articulate and value knowledge and skills that will support
        them, as life-long learners, to participate in and contribute to the
        global world and practise the core values of the school: respect,
        tolerance & inclusion, and excellence.
      </Typography>
    </Stack>
  );
};

export default MissionVision;
