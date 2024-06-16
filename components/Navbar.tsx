"use client";
import {
  Container,
  Paper,
  Button,
  Group,
  Text,
  Title,
  Box,
  Grid,
  Burger,
  Drawer,
  NavLink,
} from "@mantine/core";
import Link from "next/link";
import { HoverCard } from "@mantine/core";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from "@tabler/icons-react";

function MyNavbar() {
  const [burger, burgerActions] = useDisclosure();
  const burgetClicked = () => {
    if (burger) burgerActions.close();
    else burgerActions.open();
  };
  return (
    <>
      <Paper
        shadow="xs"
        style={{
          backdropFilter: "blur(40px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: '40px 0px'
        }}
        h="72px"
        radius="60px"
      >
        <Container size="lg" style={{ justifyContent: "space-between" }}>
          <Group>
            <Link href="/" passHref>
              <Image
                src="/veed-removebg-preview.png"
                alt="veet logo"
                height={30}
                width={120}
              />{" "}
            </Link>
          </Group>
        </Container>
        <Container visibleFrom="lg">
          <Group style={{gap:"20px"}}>
            <Text size="lg">
              Products
              <RiArrowDropDownLine />
            </Text>

            <Text size="lg">
              Use Cases
              <RiArrowDropDownLine />
            </Text>

            <Text size="lg">
              Resources
              <RiArrowDropDownLine />
            </Text>

            <Group justify="center">
              <HoverCard width={"100%"} shadow="md">
                <HoverCard.Target>
                  <Text style={{ cursor: "pointer" }}>
                    For Business
                    <RiArrowDropDownLine />
                  </Text>
                </HoverCard.Target>
                <HoverCard.Dropdown
                  w="100%"
                  p="50px 50px"
                  mt="30px"
                  style={{
                    backdropFilter: "blur(40px)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "30px",
                  }}
                >
                  <Box
                    bg="white"
                    style={{ borderRadius: "30px" }}
                    p="50px 70px"
                  >
                    <Grid w="100%">
                      <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Title order={2}>For Business</Title>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Box style={{ display: "flex" }}>
                          <Image
                            src="/violet.png"
                            alt="for business logo"
                            width={80}
                            height={80}
                          />
                          <Group>
                            <Text c="black" size="19px">
                              VEED for Business
                            </Text>
                            <Text c="#454545">
                              Video for teams that require collaboration, access
                              and privacy
                            </Text>
                          </Group>
                        </Box>
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                        <Box style={{ display: "flex" }}>
                          <Image
                            src="/green.png"
                            alt="for business logo"
                            width={80}
                            height={80}
                          />
                          <Group>
                            <Text c="black" size="19px">
                              Security & Privacy
                            </Text>
                            <Text c="#454545">Data Privacy, SSO & more.</Text>
                          </Group>
                        </Box>
                      </Grid.Col>
                    </Grid>
                  </Box>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>

            <Text size="lg">Pricing</Text>
          </Group>
        </Container>
        <Container>
          <Group style={{gap:"20px"}}>
            <Text visibleFrom="lg">Book A Demo</Text>
            <Button
              variant="light"
              bg="white"
              color="black"
              radius="20px"
              visibleFrom="md"
            >
              Login
            </Button>
            <Button
              variant="filled"
              bg="black"
              color="white"
              radius="20px"
              p="8px 20px"
              visibleFrom="sm"
            >
              Signup
            </Button>
            <Burger opened={burger} onClick={burgetClicked} hiddenFrom="lg" />
          </Group>
        </Container>
      </Paper>
      <Drawer opened={burger} onClose={burgetClicked} title="VEED" size="100%">
        <Box>
          <NavLink
            href="#required-for-focus"
            label="Products"
            rightSection={<IconChevronRight size="1.3rem" stroke={1.5} />}
          />
          <NavLink
            href="#required-for-focus"
            label="Use Cases"
            rightSection={<IconChevronRight size="1.3rem" stroke={1.5} />}
          />
          <NavLink
            href="#required-for-focus"
            label="Resources"
            rightSection={<IconChevronRight size="1.3rem" stroke={1.5} />}
          />
          <NavLink
            href="#required-for-focus"
            label="For Business"
            rightSection={<IconChevronRight size="1.3rem" stroke={1.5} />}
          />
          <NavLink
            href="#required-for-focus"
            label="Pricing"
            rightSection={<IconChevronRight size="1.3rem" stroke={1.5} />}
          />
          <NavLink
            href="#required-for-focus"
            label="Book a Demo"
            rightSection={<IconChevronRight size="1.3rem" stroke={1.5} />}
          />
          <Group
            style={{
              position: "absolute",
              right: "0",
              bottom: "20px",
              width: "100%",
            }}
            p="0px 20px"
          >
            <Button fullWidth radius="xl" bg="#eceeee" c="black">
              Login
            </Button>
            <Button fullWidth radius="xl" bg="#323232" c="white">
              Sign Up
            </Button>
          </Group>
        </Box>
      </Drawer>
    </>
  );
}

export default MyNavbar;
