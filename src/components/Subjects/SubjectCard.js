import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const SubjectCard = ({ name, Icon }) => {
  const router = useRouter();
  return (
    <Grid item xs={6} xl={3} md={4}>
      <Stack
        onClick={() =>
          router.push(`/subjects/${name.toLowerCase().replace(".", "")}`)
        }
        height="100%"
        sx={{
          cursor: "pointer",
          transition: ".2s",
          ":hover": {
            transform: "scale(1.05)",
          },
        }}
        spacing={2}
        borderRadius={1}
        bgcolor="#fff"
        px={3}
        py={4}
        alignItems="flex-start"
        boxShadow="0px 5px 25px rgba(0, 0, 0, 0.03)"
      >
        <Image src={Icon} alt={name} />
        <Typography className="grot" fontWeight={700} fontSize={24}>
          {name}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default SubjectCard;
