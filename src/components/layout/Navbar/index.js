import { useState } from "react";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Link as MuiLink,
  Button,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import ReponsiveMenu from "./ReponsiveMenu";
import Link from "next/link";

export const NavbarLinks = ({ responsive = false }) => (
  <Stack
    display={{
      xs: !responsive ? "none" : "flex",
      sm: "flex",
    }}
    sx={{
      "& > *": {
        cursor: "pointer",
      },
    }}
    ml="auto"
    // reponsive direction
    direction={responsive ? "column" : "row"}
    alignItems="center"
    spacing={4}
  >
    <Link passHref href="/">
      <MuiLink>Home</MuiLink>
    </Link>
    <Link passHref href="/about-us">
      <MuiLink>About</MuiLink>
    </Link>
    <Link passHref href="/blog">
      <MuiLink>Blog</MuiLink>
    </Link>
    <Link passHref href="/subjects">
      <MuiLink>Subjects</MuiLink>
    </Link>
    <Link passHref href="/date-sheet">
      <MuiLink>Date sheet</MuiLink>
    </Link>
    <Link passHref href="/events">
      <MuiLink>Events</MuiLink>
    </Link>
    {/* <Button
      component="a"
      href="https://student.globalolympiadzone.co.in/"
      target="_blank"
      size="large"
      disableElevation
      variant="contained"
    >
      Student login
    </Button> */}
  </Stack>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      sx={{
        my: 1.5,
      }}
      color="transparent"
      elevation={0}
      position="static"
    >
      <Toolbar>
        <Image src="/logo.png" width={55} height={47} />

        <NavbarLinks />
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            display: {
              sm: "none",
            },
            ml: "auto",
          }}
          size="small"
        >
          <MenuIcon />
        </IconButton>
        <ReponsiveMenu open={open} onClose={() => setOpen(false)}>
          <NavbarLinks responsive />
        </ReponsiveMenu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
