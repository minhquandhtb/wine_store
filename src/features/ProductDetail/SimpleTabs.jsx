import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="ĐẶC ĐIỂM NỔI BẬT" {...a11yProps(0)} />
        <Tab label="THÔNG TIN SẢN PHẨM" {...a11yProps(1)} />
        <Tab label="ĐÁNH GIÁ" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        suscipit maiores aperiam obcaecati, quis hic porro laboriosam asperiores
        reiciendis sunt molestias harum iure dolore. Facere asperiores aperiam
        illo hic maxime impedit magnam incidunt provident molestias veniam,
        itaque officia error omnis ut quas maiores dolores! Dolor dignissimos
        neque saepe sed magnam.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default SimpleTabs;
