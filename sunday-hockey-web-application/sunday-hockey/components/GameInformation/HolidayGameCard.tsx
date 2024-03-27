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



export default function HolidayGameCard() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Card.Section m={10}>
        <Title order={3} >Next Holiday</Title>
        <Text mt="sm">Sunday, April 7th, 2024 </Text>
      </Card.Section>

    </Card>
  );
}
