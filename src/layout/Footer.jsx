import React from "react";
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby";
import Socials from "src/components/Socials";
import { makeStyles } from "@material-ui/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
  },
}));

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  const doNothing = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <hr />
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Container maxWidth="md">
        <Typography align="center">
          <Socials />
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center">
          <Link
            to="/"
            component={GatsbyLink}
            color="inherit"
            className={classes.link}
            onClick={doNothing}
          >
            &copy;
          </Link>{" "}
          {site.siteMetadata.author} 2016 - {currentYear}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
