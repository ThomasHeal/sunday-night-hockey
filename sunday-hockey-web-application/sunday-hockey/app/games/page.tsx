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
  Space,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import NavbarLayout from '@/components/NavBar/NavBar';
import GamesTable from '@/components/Games/GamesTable';
import NextGameCard from '@/components/GameInformation/NextGameCard';  
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery hook
import HolidayGameCard from '@/components/GameInformation/HolidayGameCard';


export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)
  return (
    <NavbarLayout>
      <Grid>
        <Grid.Col span={12}>
          <Title order={1}>Games</Title>
          <Text mt="lg">View Previous and Upcoming Games here</Text>
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 6}>
          <GamesTable />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 6}>
          <NextGameCard />
          <Space h="lg" />
          <HolidayGameCard />
        </Grid.Col>

      </Grid>
    </NavbarLayout>
  );
}
