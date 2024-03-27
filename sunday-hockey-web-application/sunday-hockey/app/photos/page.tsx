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
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery hook
import NextGameCard from '../../components/GameInformation/NextGameCard';
import PhotoContainer from '@/components/Players/PlayersContainer';
import NavbarLayout from '@/components/NavBar/NavBar';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)

  return (
    <NavbarLayout>
      <Title order={1} mb={20}>
        Photos
      </Title>
      <Title order={2}>Recent Photos</Title>
        {/* <Carousel
          slideSize="33.33%"
          align="start"
          slideGap="xs"
          controlSize={20}
          slidesToScroll={1}
          loop
        >
          <Carousel.Slide>
            <PhotoContainer player={}/>
          </Carousel.Slide>
          <Carousel.Slide>
            <PhotoContainer />
          </Carousel.Slide>
          <Carousel.Slide>
            <PhotoContainer />
          </Carousel.Slide>
          <Carousel.Slide>
            <PhotoContainer />
          </Carousel.Slide>
          <Carousel.Slide>
            <PhotoContainer />
          </Carousel.Slide>
          <Carousel.Slide>
            <PhotoContainer />
          </Carousel.Slide>
        </Carousel> */}
    </NavbarLayout>
  );
}
