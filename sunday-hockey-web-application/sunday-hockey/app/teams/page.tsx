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
  Table,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import NextGameCard from '../../components/GameInformation/NextGameCard';
import NavbarLayout from '@/components/NavBar/NavBar';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
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
        <Grid.Col span={12}>
          <Table highlightOnHover captionSide="top" verticalSpacing="xs">
            <Table.Tbody>
              <Table.Tr>
                <Table.Th>Player</Table.Th>
                <Table.Th>Position</Table.Th>
                <Table.Th>Number</Table.Th>
                <Table.Th>Rating</Table.Th>
              </Table.Tr>
              {players.map((player) => (
                <Table.Tr key={player.id}>
                  
                  <Table.Td>
                    <img src={player.image} alt={player.name} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                    <Text>{player.name}</Text>
                  </Table.Td>
                  <Table.Td>{player.position}</Table.Td>
                  <Table.Td>{player.number}</Table.Td>
                  <Table.Td>
                    <Chip color="blue" radius="xl">
                      {player.rating}
                    </Chip>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
          

        </Grid.Col>
      </Grid>
    </NavbarLayout>
  );
}
