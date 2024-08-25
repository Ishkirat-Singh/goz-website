import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const EventsList = ({ events }) => {
  return (
    <Stack mt={-4} mb={15}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {events.map((event) => (
            <Stack
              key={event._key}
              direction="row"
              justifyContent="space-between"
              sx={{
                bgcolor: "white",
                p: 3,
                boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.05)",
                borderLeft: "8px solid",
                borderRadius: 0.5,
                borderColor: "primary.main",
              }}
            >
              <Typography fontSize={18}>{event.name}</Typography>
              <Typography pl={2} align="right" fontSize={18}>
                {event.date}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};

export default EventsList;
