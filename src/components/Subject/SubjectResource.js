import { Stack, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";

const SubjectResource = ({ Icon, title, sub, link }) => {
  return (
    <Stack direction="row" alignItems="flex-start" spacing={2}>
      <Image src={Icon} />
      <Stack>
        <Typography variant="body2" mb={1} fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body2">{sub}</Typography>
        <MuiLink
          href={link}
          target="_blank"
          underline="always"
          color="#419AE7"
          variant="body2"
          fontWeight={700}
        >
          Download now
        </MuiLink>
      </Stack>
    </Stack>
  );
};

export default SubjectResource;
