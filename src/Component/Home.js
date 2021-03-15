import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import app from "../firebase";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Task-Traker App
          </Typography>
          <Button
            className={classes.button}
            onClick={() => app.auth().signOut()}
          >
            <Link to="/signin" style={{ textDecoration: "none", margin: 10 }}>
              Log In
            </Link>
          </Button>
          <Button
            className={classes.button}
            onClick={() => app.auth().signOut()}
          >
            <Link to="/signup" style={{ textDecoration: "none", margin: 10 }}>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
