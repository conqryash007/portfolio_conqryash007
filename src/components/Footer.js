import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Github from "@material-ui/icons/GitHub";
import Link from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        icon={<Github />}
        href="https://github.com/conqryash007"
        className={classes.root}
      />
      <BottomNavigationAction
        icon={<Link />}
        href="https://www.linkedin.com/in/guptayash007/"
        className={classes.root}
      />
      <BottomNavigationAction
        icon={<Twitter />}
        href="https://twitter.com/conqryash007"
        className={classes.root}
      />
    </BottomNavigation>
  );
};
export default Footer;
