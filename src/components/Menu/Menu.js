import styled from "styled-components";
import Menupic from "../../assets/Menu_pic/background_menu.jpg";
import Menudata from "./Menudata";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";


const MenuBackground = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background: url(${Menupic}) center/cover, no-repeat border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: column;
`;

const MenuWhiteBackground = styled.div`
  background-color: rgba(222, 222, 222, 0.5);
  height: 500px;
  margin-top: 30vh;
`;

const ItemDetails = styled.div`
  text-transform: capitalize;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-left: 10rem;
`;

const ItemName = styled.div`
  flex-order: 0;
  width: 50%;
`;
const ItemPrice = styled.div`
  flex-order: 1;
  width: 50%;
`;

const BorderMenu = styled.div`
  border-bottom: solid black 0.2px;
  margin-top: 7px;
  width: 100%;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const displayMenuList = (cat) => {
    return (
      <>
          <Grid container spacing={2}>
        <ItemDetails>
          {Menudata.filter((menuitem) => menuitem.category == cat).map(
            (filtereditem) => (
              <>
              <Grid item xs={12} sm={6}>
                {filtereditem.name}
                <span style={{ marginLeft: "25rem" }}>
                  {filtereditem.price}
                </span>
                <br />
                <BorderMenu />
                </Grid>
              </>
            )
          )}
        </ItemDetails>
        </Grid>
      </>
    );
  };

  return (
    <MenuBackground>
      <MenuWhiteBackground>
        <div className={classes.root}>
          <AppBar position="static" color="black" style={{fontWeight: '20rem'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Drinks" {...a11yProps(0)} />
              <Tab label="Momo" {...a11yProps(1)} />
              <Tab label="Fish" {...a11yProps(2)} />
              <Tab label="Special" {...a11yProps(3)} />
              <Tab label="Soup" {...a11yProps(4)} />
              <Tab label="Salad" {...a11yProps(5)} />
              <Tab label="Pizza&pasta" {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            {displayMenuList("Drinks")}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {displayMenuList("Momo")}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {displayMenuList("Fish")}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {displayMenuList("Special")}
          </TabPanel>
          <TabPanel value={value} index={4}>
            {displayMenuList("Soup")}
          </TabPanel>
          <TabPanel value={value} index={5}>
            {displayMenuList("Salad")}
          </TabPanel>
          <TabPanel value={value} index={6}>
            {displayMenuList("Pizza&pasta")}
          </TabPanel>
        </div>
      </MenuWhiteBackground>
    </MenuBackground>
  );
}
