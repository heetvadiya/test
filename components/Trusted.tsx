import { Title } from "@mantine/core";
import React from "react";
import TrustedSlider from "./TrustedSlider";

const Trusted: React.FC = () => {
  return (
    <>
      <Title c="#323232" style={{textAlign:'center'}} mt="70px" mb="30px">
        Trusted by teams at
      </Title>
      <TrustedSlider />
    </>
  );
};

export default Trusted;
