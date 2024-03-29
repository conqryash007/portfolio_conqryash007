import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";

import fund4cause from "./../img/project_snaps/fund4cause.webp";
import glassyVault from "./../img/project_snaps/glassyVault.webp";
import it from "./../img/project_snaps/it.webp";
import lottery from "./../img/project_snaps/lottery.webp";
import roverProject from "./../img/project_snaps/roverProject.webp";
import retraview from "./../img/project_snaps/retraview.webp";
import freshit from "./../img/project_snaps/freshit.webp";
import krypt from "./../img/project_snaps/krypt.webp";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "rgb(31, 29, 29)",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    height: "350px",
    overflow: "auto",
    backgroundColor: "rgb(179, 23, 67)",
    color: "white",
    padding: "10px",
    boxShadow: "rgba(255, 252, 255) 1.95px 1.95px 4px",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "rgba(255, 252, 255,0.5) 1.95px 1.95px 4px",
    },
  },
  heading: {
    paddingTop: "20px",
    color: "tan",
  },
}));

const projects = [
  {
    name: "NFT-KryptoZombie",
    description: `NFT-KryptoZombie is a collection of pixelated zombies. By paying a tiny gas fee, platform users can gain ownership of each KryptoZombie in the collection. All ownership details are stored on the Ethereum blockchain, and the smart contract adheres to the professional ERC721 standards.`,
    image: krypt,
    gtb_url: "https://github.com/conqryash007/NFT-KryptoZombie-Mint",
  },
  {
    name: "fund4cause",
    description: `A decentralised app for funding projects and technology around the world `,
    image: fund4cause,
    gtb_url: "https://github.com/conqryash007/fund4cause",
  },
  {
    name: "Glassy Vault Dapp",
    description: `The Glassy Vault Dapp ideate upon the increasing use of fraudulent certificates due to conventional means of storing and verification of degrees/educational papers/caste certificates etc.
    This project aims to provide a way to securely store the results of 10th and 12th board exams of different schools using next gen technology i.e blockchain. The smart contract build on the Ethereum network can surely be a effective way to tackle the above problem and can easily be extended to store more such documents.`,
    image: glassyVault,
    gtb_url: "https://github.com/conqryash007/Glassy_Vault_Dapp",
  },
  {
    name: "reTRAView",
    description: `reTRAView is a full-stack MERN site for travelers and guide to list their visited a places and add location and description for other viewers and travelers.`,
    image: retraview,
    gtb_url: "https://github.com/conqryash007/reTRAView",
  },
  {
    name: "IT Branch Website",
    description: `This is a website for the IT branch of IIIT BBSR.
    It enables student to login and signup and has features like viewing timetable, student details, creating and reacting to polls, notice board, a to-do list, user-dashboard etc.`,
    image: it,
    gtb_url: "https://github.com/gsk-007/Tech-Attack",
  },

  {
    name: "👨‍🚀Rover_Project👨‍🚀",
    description: `This project lets the user to get images from the different mars rovers send by NASA . `,
    image: roverProject,
    gtb_url: "https://github.com/conqryash007/Rover_Project",
  },

  {
    name: "FRESHERS WEBSITE",
    description: `A website for freshers to get guidance from their seniors.`,
    image: freshit,
    gtb_url: "https://github.com/conqryash007/IT_Freshers_Website",
  },
  {
    name: "Lottery Dapp",
    description: `A decentralized App for staking ether over a game which randomly generates winner and transfers the staked money of all partcipants to the winners wallet.`,
    image: lottery,
    gtb_url: "https://github.com/conqryash007/Lottery_Dapp",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography className={classes.heading} align="center" variant="h4">
        <Typed strings={["PERSONAL PROJECTS"]} typeSpeed={40} />
      </Typography>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={project.gtb_url} size="small" color="primary">
                  Checkout Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
