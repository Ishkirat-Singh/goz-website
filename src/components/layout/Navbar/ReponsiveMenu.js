import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Cancel";
import { IconButton, Stack } from "@mui/material";

const ReponsiveMenu = ({ children, open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Stack p={5} px={7}>
        {children}
      </Stack>
    </Drawer>
  );
};

export default ReponsiveMenu;
7;
