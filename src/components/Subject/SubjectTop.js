import { Stack, Typography } from "@mui/material";

const SubjectTop = ({ name, description, nameToDisplay }) => {
  return (
    <Stack mx={2} pt={10} pb={20} alignItems="center" spacing={3}>
      <Typography fontWeight={700} variant="h1" textTransform="capitalize">
        {nameToDisplay ? nameToDisplay : name}
      </Typography>
      <Typography align="center" maxWidth="md">
        {description}
      </Typography>
    </Stack>
  );
};

export default SubjectTop;
