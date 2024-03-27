'use client';

import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  Checkbox,
  Chip,
  Title,
  Text,
  Card,
  Grid,
  Button,
  Container,
  Image,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery hook
import PhotoContainer from '@/components/Players/PlayersContainer';
import NavbarLayout from '@/components/NavBar/NavBar';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)
  const players = [
    {
        id: 1,
      name: 'John Doe',
      position: 'Forward',
      number: 12,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
      rating: 4.5,
    },
    {
        id: 2,
      name: 'Jane Doe',
      position: 'Defense',
      number: 4,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
      rating: 3,
    },
    {
        id: 3,
      name: 'James Doe',
      position: 'Goalie',
      number: 1,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
      rating: 3
    },
    {
        id: 4,
      name: 'Jill Doe',
      position: 'Forward',
      number: 5,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
      rating: 2,
    },
    {
        id: 5,
      name: 'Jack Doe',
      position: 'Defense',
      number: 6,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
      rating: 5,
    },
    {
        id: 1,
      name: 'Steven Doe',
      position: 'Forward',
      number: 27,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
      rating: 4.5,
    },
    {
        id: 1,
      name: 'Josh Doe',
      position: 'Forward',
      number: 18,
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
      rating: 4.5,
    },
  ];

    const forwards = players.filter((player) => player.position === 'Forward');
    const defense = players.filter((player) => player.position === 'Defense');
    const goalies = players.filter((player) => player.position === 'Goalie');

  
  return (
    <NavbarLayout>
      <Title order={1} mb={20}>
        Players
      </Title>
      <Text mt="lg">View Players Stats and Personal Information Here</Text>
      <Container size="xl" >
        <Title order={2} mt={20}>Forwards</Title>
        <Carousel
          slideSize="33.33%"
          align="start"
          slideGap="xs"
          controlSize={20}
          slidesToScroll={1}
          loop
        >
            {(forwards || []).map((player) => (
                <Carousel.Slide key={player.name}>
                    <PhotoContainer player={player} />
                </Carousel.Slide>
                ))}
        </Carousel>
        </Container>
        <Container size="xl" >
        <Title order={2} mt={20}>Defense</Title>
        <Carousel
          slideSize="33.33%"
          align="start"
          slideGap="xs"
          controlSize={20}
          slidesToScroll={1}
          loop
        >
            {(defense || []).map((player) => (
                <Carousel.Slide key={player.name}>
                    <PhotoContainer player={player} />
                </Carousel.Slide>
                ))}
        </Carousel>
        </Container>
        <Container size="xl" >
        <Title order={2} mt={20}>Goalies</Title>
        <Carousel
          slideSize="33.33%"
          align="start"
          slideGap="xs"
          controlSize={20}
          slidesToScroll={1}
          loop
        >
            {(goalies || []).map((player) => (
                <Carousel.Slide key={player.name}>
                    <PhotoContainer player={player} />
                </Carousel.Slide>
                ))}
        </Carousel>
        </Container>

    </NavbarLayout>
  );
}
