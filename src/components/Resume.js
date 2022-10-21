import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Download from "@material-ui/icons/ArrowDownward";
import avt from "./../avt.webp";

import pdf from "./../public/Resume.pdf";
import "./../App.css";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    color: "tomato",
  },
  avatar: {
    height: "200px",
    width: "200px",
  },
  inner: {
    padding: "50px",
  },
  heading: {
    textShadow: "3px 3px 4px #ff0000",
  },
  intro: {
    maxWidth: "400px",
  },
  btn: {
    marginTop: "10px",
    color: "pink",
  },
  bx: {
    textAlign: "center",
    boxShadow: "2px 10px 20px 2px  rgb(153, 35, 78)",
    padding: "10px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box>
          <div>
            <Typography className={classes.heading} align="center" variant="h4">
              <Typed strings={["RESUME"]} typeSpeed={40} />
            </Typography>
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.inner}
          >
            <div className={classes.bx}>
              <Avatar className={classes.avatar} src={avt} alt="Yash Gupta" />
              <a href={pdf} download>
                <Button
                  color="secondary"
                  variant="contained"
                  className={classes.btn}
                >
                  <Download />
                  Download
                </Button>
              </a>
              <br />
              <a
                href="https://drive.google.com/file/d/15nDAF4_KVp0yK0IW586V23vabduLjV9u/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.btn}
                >
                  <Download />
                  View Resume
                </Button>
              </a>
            </div>
            <div
              style={{
                margin: "15px",
                textAlign: "center",
                color: "rgb(159, 75, 204)",
              }}
            >
              <Typography
                style={{
                  color: "rgb(255, 75, 204)",
                  textShadow: "3px 3px 4px #ff0000",
                }}
                variant="h4"
              >
                <Typed strings={["Yash Gupta"]} typeSpeed={40} />
              </Typography>
              <Typography
                className={classes.heading}
                align="inherit"
                variant="h4"
              >
                <Typed strings={["IIIT BBSR"]} typeSpeed={40} />
              </Typography>
              <Typography
                className={classes.intro}
                align="inherit"
                variant="h6"
                style={{ color: "rgb(182, 132, 207)" }}
              >
                <Typed
                  strings={[
                    "I love problem solving and cherish being around technology.I’m familiar with a variety of programming languages, including JavaScript, Solidity, C, C++ with hands on Reactjs, MongoDB and other web technologies but I’m always adding new skills to my repertoire.",
                  ]}
                  typeSpeed={1}
                />
              </Typography>
            </div>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
