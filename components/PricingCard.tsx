import React from "react";
import {
  ButtonProps,
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  Grid,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";
import { TiTick } from "react-icons/ti";
import { BsStars } from "react-icons/bs";

interface PricingCardProps {
  title: string;
  plan: string;
  cost: string;
  time: string;
  button: string;
  saving?: string;
  features: string[];
  trial?: string;
  buttonStyle?: ButtonProps;
  borderc?: string;
  recommend?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  plan,
  cost,
  time,
  button,
  saving,
  features,
  trial,
  buttonStyle,
  borderc,
  recommend,
}) => {
  const [opened, { toggle }] = useDisclosure(false);
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");
  const visibleFeatures = isSmallScreen ? features.slice(0, 3) : features;
  const additionalFeatures = isSmallScreen ? features.slice(3) : [];

  const defaultButtonStyle: ButtonProps = {
    variant: "outline",
    style: {
      borderWidth: "2px",
      borderColor: "blue",
      color: "black",
    },
  };
  return (
    <>
      <Card
        style={{
          backgroundColor: "white",
          border: borderc ? `3px solid ${borderc}` : "none",
          position: "relative",
        }}
        radius="lg"
        h="490px"
        p="32px 24px"
      >
        {recommend && (
          <Box
            variant="gradient"
            bg="blueViolet"
            style={{
              position: "absolute",
              top: "0px",
              right: "26px",
              padding: "4px 12px", 
              borderRadius: "0px 0px 8px 8px", 
            }}
          >
            <Text c="white"><BsStars />RECOMMENDED</Text>
          </Box>
        )}
        <Title component="p" order={2} size="24px">
          {title}
        </Title>
        <Text size="16px">{plan}</Text>
        <Box
          style={{
            margin: "15px 0px 0px",
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <Title order={2} size="32px">
            {cost}
          </Title>
          {saving && (
            <Title
              order={5}
              component="p"
              style={{
                color: "green",
                background: "lightgreen",
                maxWidth: "fit-content",
                borderRadius: "10px",
                padding: "0px 5px",
              }}
            >
              SAVE {saving}
            </Title>
          )}
        </Box>
        <Text style={{ marginBottom: "10px" }} size="13px">
          {time}
        </Text>
        <Button {...(buttonStyle || defaultButtonStyle)} h="50px" radius="xl">
          {button}
        </Button>
        {trial && <Text ta="center">{trial}</Text>}
        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />
        {visibleFeatures.map((feature, index) => (
          <Text key={index} size="16px" mt="10px" c="#454545">
            <TiTick />
            {feature}
          </Text>
        ))}
        {isSmallScreen && (
          <>
            <Group justify="left" mb={5}>
              <Text
                onClick={toggle}
                style={{ color: "blue", cursor: "pointer" }}
                c="blue"
                size="14px"
                mt="10px"
              >
                See All Features
              </Text>
            </Group>
            <Collapse in={opened}>
              {additionalFeatures.map((feature, index) => (
                <Text key={index} size="15px" mt="10px">
                  <TiTick />
                  {feature}
                </Text>
              ))}
            </Collapse>
          </>
        )}
        <Text></Text>
      </Card>
    </>
  );
};

export default PricingCard;
