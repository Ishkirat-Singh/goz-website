import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import teachers from "./teachers";
import Marquee from "react-fast-marquee";

const Teachers = () => {
  return (
    <Stack position="relative">
      <Box
        sx={{
          width: "100%", // Use the full width of the screen
          my: 10,
          overflow: "hidden",
        }}
      >
        <Stack
          spacing={0.8}
          mb={{
            xs: 12,
            sm: 6,
          }}
          alignItems="center"
        >
          <Typography className="grot" fontWeight={700} variant="h3">
            Best Teachers
          </Typography>
          <Typography className="grot" fontWeight={700} variant="h5">
            Awardees 2024
          </Typography>
        </Stack>

        <Marquee
          gradient={true}
          speed={60}
          pauseOnHover
        >
          {teachers.map((teacher, index) => (
            <Stack
              key={index}
              alignItems="center"
              mx={4}
              sx={{ minWidth: 200 }}
            >
              <Image
                src={teacher.pic}
                alt={teacher.name}
                width={200}
                height={200}
              />
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                {teacher.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {teacher.school}
              </Typography>
            </Stack>
          ))}
        </Marquee>
      </Box>
    </Stack>
  );
};

export default Teachers;