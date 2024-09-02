import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import teachers from "./teachers";
import Marquee from "react-fast-marquee";
import FloralBorder from "./images/floral-border.png"; // Adjust the path as necessary

const Teachers = () => {
  return (
    <Stack position="relative">
      <Box
        sx={{
          width: "100%",
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

        <Marquee gradient={true} speed={70}>
          {teachers.map((teacher, index) => (
            <Stack
              key={index}
              alignItems="center"
              mx={4}
              sx={{ minWidth: 230 }}
              position="relative"
            >
              <Box
                sx={{
                  width: 220,
                  height: 220,
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: 1, // Ensure the image is behind the border
                  }}
                >
                  <Image
                    src={teacher.pic}
                    alt={teacher.name}
                    width={200}
                    height={200}
                    style={{ borderRadius: "50%" }}
                  />
                </Box>

                {/* Floral Border */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 2, // Bring the border in front
                  }}
                >
                  <Image
                    src={FloralBorder}
                    alt="Floral Border"
                    layout="fill"
                    objectFit="contain"
                    style={{
                      borderRadius: "50%",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Box>
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
