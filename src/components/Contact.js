import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";

import ltico from "./../img/ltico.webp";
import ghico from "./../img/ghico.webp";
import liicon from "./../img/liicon.webp";
import instico from "./../img/instico.webp";
import twitter from "./../img/twitter.webp";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "rgb(31, 29, 29)",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    paddingTop: "20px",
  },
  input: {
    color: "#fff",
    maxWidth: "300px",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  imgIco: {
    "&:hover": {
      transform: "scale(1.1)",
    },
    maxWidth: "70px",
    maxHeight: "70px",
    marginLeft: "20px",
    transition: "0.3s",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <form
          action="mailto:guptayash200010@gmail.com"
          method="post"
          className={classes.form}
        >
          <div>
            <Typography className={classes.heading} align="center" variant="h4">
              <Typed strings={["Contact me"]} typeSpeed={40} />
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ className: classes.input }}
            />

            <InputField
              style={{ marginTop: "1rem" }}
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              className={classes.button}
              target="_top"
              rel="noopener noreferrer"
              href={`mailto:guptayash200010@gmail.com`}
            >
              Contact Me
            </Button>
          </div>
          <Box className={classes.form}>
            <Typography className={classes.heading} align="center" variant="h4">
              <Typed strings={["or Connect via..."]} typeSpeed={40} />
            </Typography>
            <Grid style={{ textAlign: "center", padding: "30px" }}>
              <a href="https://leetcode.com/conqryash007/">
                <img
                  className={classes.imgIco}
                  src={ltico}
                  alt="leetcode icon"
                />
              </a>
              <a href="https://www.instagram.com/conqryash007/">
                <img
                  className={classes.imgIco}
                  src={instico}
                  alt="instagram icon"
                />
              </a>
              <a href="https://github.com/conqryash007">
                <img className={classes.imgIco} src={ghico} alt="github icon" />
              </a>
              <a href="https://www.linkedin.com/in/guptayash007/">
                <img
                  className={classes.imgIco}
                  src={liicon}
                  alt="linkedIn icon"
                />
              </a>
              <a href="https://twitter.com/conqryash007">
                <img
                  className={classes.imgIco}
                  src={twitter}
                  alt="twitter icon"
                />
              </a>
            </Grid>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default Contact;
