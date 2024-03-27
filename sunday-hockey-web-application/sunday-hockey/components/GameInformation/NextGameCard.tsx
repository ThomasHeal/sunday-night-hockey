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
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery hook
import { useDisclosure } from '@mantine/hooks';



export default function NextGameCard() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Card.Section m={10}>
        <Title order={3}>Next Game</Title>
        <Text mt="sm">Sunday, April 16th, 2024</Text>
        <Text mt="sm">8:00 PM</Text>
      </Card.Section>
      <Card.Section m={10}>
        <Title order={3} mt={10}>
          Arena
        </Title>
        <Text mt="sm">Cambridge Sports Park</Text>
      </Card.Section>
    </Card>
  );
}
