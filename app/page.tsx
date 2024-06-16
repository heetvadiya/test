import { Anchor, Box, Button, Text, Title } from "@mantine/core";
import Pricings from "@/components/Pricings";
import Trusted from "@/components/Trusted";
import MyNavbar from "@/components/Navbar";
import classes from "./responsiveFont.module.css"

function Demo() {
  const blueTextStyle = {
    color: "#4299E1",
    textDecoration: "underline",
  };
  return (
    <Box bg="#eceeee" py="20px">
      <Box w="100%" p="10px 20px" style={{ position: "fixed", zIndex: "3" }}>
        <MyNavbar />
      </Box>

      {/* title  */}
      <Title
        style={{textAlign:'center'}}
        my="lg"
        className={classes.fonts}
        m="0px 0px 20px"
        ff="BaseNeue, sans-serif"
        lts="-0px"
        mt="100px"
        w='95%'
      >
        GREAT VIDEOS START WITH A PLAN
      </Title>
      <Text style={{textAlign:'center'}} size="xl" mb="2rem">
        Try VEED with our{" "}
        <Anchor
          href="#"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          Free Plan
        </Anchor>
      </Text>

      {/* pricings box  */}
      <Box>
        <Pricings />
      </Box>

      {/* trusted by teams  */}
      <Box>
        <Trusted />
      </Box>
    </Box>
  );
}
export default Demo;
