import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { PRODUCTS } from "constants/images";
import ImageThumbnail from "./ImageThumbnail/ImageThumbnail";

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 448,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "30%",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label={<ImageThumbnail src={PRODUCTS[0]} />} {...a11yProps(0)} />
        <Tab label={<ImageThumbnail src={PRODUCTS[1]} />} {...a11yProps(1)} />
        <Tab label={<ImageThumbnail src={PRODUCTS[2]} />} {...a11yProps(2)} />
        <Tab label={<ImageThumbnail src={PRODUCTS[3]} />} {...a11yProps(3)} />
        <Tab label={<ImageThumbnail src={PRODUCTS[4]} />} {...a11yProps(4)} />
        <Tab label={<ImageThumbnail src={PRODUCTS[5]} />} {...a11yProps(5)} />
        <Tab label={<ImageThumbnail src={PRODUCTS[6]} />} {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <img className="img-tab-panel" src={PRODUCTS[0]} alt="img" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <img className="img-tab-panel" src={PRODUCTS[1]} alt="img" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <img className="img-tab-panel" src={PRODUCTS[2]} alt="img" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <img className="img-tab-panel" src={PRODUCTS[3]} alt="img" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <img className="img-tab-panel" src={PRODUCTS[4]} alt="img" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <img className="img-tab-panel" src={PRODUCTS[5]} alt="img" />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <img className="img-tab-panel" src={PRODUCTS[6]} alt="img" />
      </TabPanel>
    </div>
  );
}
