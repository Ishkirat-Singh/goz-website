import { Stack, Typography, useMediaQuery } from "@mui/material";

const NotificationBar = () => {
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  return (
    <Stack
      p={{
        xs: 0.5,
        sm: 1,
      }}
      textAlign="center"
      bgcolor="#F8D471"
    >
      <Typography variant={isXs ? "body2" : "body1"}>
        2023-2024 Registration has started! Win exciting prizes.{" "}
        {!isXs && <u>Enroll today.</u>}
      </Typography>
    </Stack>
  );
};

export default NotificationBar;
