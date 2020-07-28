import React, { useState } from 'react';
import { HeaderElevation } from '../config/ScrollEvents';
import Drawer from './Drawer';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { Squeeze as Hamburger } from 'hamburger-react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/HeaderStyles';

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const { classes, themeState, themeChange } = props;
  const handleSetOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && <Drawer open={isOpen} close={handleSetOpen} />}
      <HeaderElevation {...props}>
        <AppBar>
          <Container>
            <Toolbar className={classes.toolbar}>
              <Hidden mdUp>
                <Hamburger
                  className={classes.hamburger}
                  distance="sm"
                  size="28"
                  color={themeState ? '#FFFFFF' : '#000000'}
                  toggled={isOpen}
                  toggle={handleSetOpen}
                />
              </Hidden>
              <Typography variant="h6" className={classes.title}>
                Bello & Co Inc.
              </Typography>
              <Tooltip title="Toggle light/dark theme">
                {themeState ? (
                  <FontAwesomeIcon
                    icon={faSun}
                    className={classes.themeIcon}
                    onClick={themeChange}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMoon}
                    className={classes.themeIcon}
                    onClick={themeChange}
                  />
                )}
              </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
      </HeaderElevation>
    </div>
  );
};

export default withStyles(styles)(Navbar);