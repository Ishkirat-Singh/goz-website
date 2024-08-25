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
      bgcolor="#FC6F03"
    >
      <Typography variant={isXs ? "body2" : "body1"}>
        2024-2025 Registration has started!{" "}
        {!isXs && <u>Enroll today.</u>}
      </Typography>
    </Stack>
  );
};

export default NotificationBar;
