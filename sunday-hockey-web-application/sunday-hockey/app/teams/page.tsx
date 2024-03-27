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
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import NextGameCard from '../../components/GameInformation/NextGameCard';
import NavbarLayout from '@/components/NavBar/NavBar';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();


  return (
    <NavbarLayout>
      <Grid>
        <Grid.Col span={12}>
          <Title order={1}>Teams</Title>
          <Text mt="lg">Make New Teams Here</Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="xs" padding="md" mt="lg" mb="lg" radius="md">
            <Card.Section>
              <Title order={2}>Team Dark</Title>
              <Text mt="lg">Create a new team here</Text>
              <Button color="blue" radius="md">
                Create Team
              </Button>
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <Card shadow="xs" padding="md" mt="lg" mb="lg" radius="md">
            <Card.Section>
              <Title order={2}>Team Light</Title>
              <Text mt="lg">Create a new team here</Text>
              <Button color="blue" radius="md">
                Create Team
              </Button>
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>
    </NavbarLayout>
  );
}
