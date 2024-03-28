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
  ScrollArea,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import NextGameCard from '../../components/GameInformation/NextGameCard';
import NavbarLayout from '@/components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery hook

import {
  IconHome,
  IconPhoto,
  IconSettings,
  IconUsersGroup,
  IconUser,
  //delete
  IconTrash,
} from '@tabler/icons-react';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)

  class Player {
    id: number;
    firstname: string;
    lastname: string;
    position: string;
    number: number;
    image: string;
    rating: number;
    teamColor: string; // Add teamColor attribute
    constructor(
      id: number,
      firstname: string,
      lastname: string,
      position: string,
      number: number,
      image: string,
      rating: number,
      teamColor: string // Initialize teamColor in constructor
    ) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.position = position;
      this.number = number;
      this.image = image;
      this.rating = rating;
      this.teamColor = teamColor; // Assign teamColor in constructor
    }
  }

  // Random players with placeholder images, rating out of 5 and team color
  const players = [
    new Player(1, 'Lionel', 'Messi', 'Forward', 10, 'https://via.placeholder.com/150', 5, ''),
    new Player(2, 'Cristiano', 'Ronaldo', 'Forward', 7, 'https://via.placeholder.com/150', 5, ''),
    new Player(3, 'Neymar', 'Jr', 'Forward', 10, 'https://via.placeholder.com/150', 5, ''),
    new Player(4, 'Kylian', 'Mbappe', 'Forward', 7, 'https://via.placeholder.com/150', 5, ''),
    new Player(5, 'Kevin', 'De Bruyne', 'Midfielder', 17, 'https://via.placeholder.com/150', 5, ''),
    // Add more players with appropriate team colors
  ];

  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [playerslist, setPlayers] = useState<Player[]>(players); // Initialize players state with the above array of players

  function handlePlayerSelection(player: Player) {
    setSelectedPlayers((prevSelectedPlayers) => {
      const index = prevSelectedPlayers.findIndex(
        (selectedPlayer) => selectedPlayer.id === player.id
      );
      if (index === -1) {
        return [...prevSelectedPlayers, player];
      } else {
        return prevSelectedPlayers.filter((selectedPlayer) => selectedPlayer.id !== player.id);
      }
    });
  }

  function handleAddToDark() {
    const updatedPlayers = playerslist.map((player) => {
      if (selectedPlayers.includes(player)) {
        return { ...player, teamColor: 'dark' }; // Create a new object with updated teamColor
      }
      return player;
    });
    setPlayers(updatedPlayers); // Set the state with the updated players
    setSelectedPlayers([]);
  }

  function handleAddToLight() {
    const updatedPlayers = playerslist.map((player) => {
      if (selectedPlayers.includes(player)) {
        return { ...player, teamColor: 'light' }; // Create a new object with updated teamColor
      }
      return player;
    });
    setPlayers(updatedPlayers); // Set the state with the updated players
    setSelectedPlayers([]);
  }

  //function to let me click remove on a player and set their team color to ''
  function handleRemovePlayer(player: Player) {
    const updatedPlayers = playerslist.map((p) => {
      if (p.id === player.id) {
        return { ...p, teamColor: '' }; // Set teamColor to '' for the selected player
      }
      return p;
    });
    setPlayers(updatedPlayers); // Set the state with the updated players
    setSelectedPlayers([]);
  }

  // Filter players based on team color
  const darkTeam = playerslist.filter((player) => player.teamColor === 'dark');
  const lightTeam = playerslist.filter((player) => player.teamColor === 'light');
  const allPlayers = playerslist.filter((player) => player.teamColor === '');

  useEffect(() => {
    if (selectedPlayers.length > 0) {
      console.log(selectedPlayers);
    } else {
      console.log('no players selected');
    }
  }, [selectedPlayers]);

  return (
    <NavbarLayout>
      <Grid>
        <Grid.Col span={12}>
          <Title order={1}>Teams</Title>
          <Text mt="lg">Make New Teams Here</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="xs" padding="xs" mt="xs" mb="xs" radius="md">
            <Card.Section>
              <Title order={2} m="xs">
                Team Dark
              </Title>
              <Button color="blue" radius="md" m="xs" onClick={handleAddToDark}>
                Create Team
              </Button>
            </Card.Section>
            <ScrollArea style={{ height: 250 }}>
              <Table
                stickyHeader
                highlightOnHover
                withTableBorder
                captionSide="top"
                verticalSpacing="xs"
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Player</Table.Th>
                    {!isMobile && <Table.Th>Position</Table.Th>}
                    {!isMobile && <Table.Th>Number</Table.Th>}
                    {!isMobile && <Table.Th>Rating</Table.Th>}
                    
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {darkTeam.map((player) => (
                    <Table.Tr key={player.id}>
                      <Table.Td
                        onClick={() => handlePlayerSelection(player)}
                        style={{ cursor: 'pointer' }}
                      >
                        {!isMobile &&
                        <img
                          src={player.image}
                          alt={player.firstname + ' ' + player.lastname}
                          style={{ width: 50, height: 50, borderRadius: '50%' }}
                        />}
                        <Text>{player.firstname}</Text>
                      </Table.Td>

                      {!isMobile && <Table.Td>{player.position}</Table.Td>}
                      {!isMobile && <Table.Td>{player.number}</Table.Td>}
                      {!isMobile && (
                        <Table.Td>
                          <Chip color="blue" radius="xl">
                            {player.rating}
                          </Chip>
                        </Table.Td>
                      )}
                      <Table.Td>
                        <Button size='xs' color="red" onClick={() => handleRemovePlayer(player)}>
                          <IconTrash />
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="xs" padding="xs" mt="xs" mb="xs" radius="md">
            <Card.Section>
              <Title order={2} m="xs">
                Team Light
              </Title>
              <Button color="blue" radius="md" m="xs" onClick={handleAddToLight}>
                Create Team
              </Button>
            </Card.Section>
            <ScrollArea style={{ height: 250 }}>
              <Table
                stickyHeader
                highlightOnHover
                withTableBorder
                captionSide="top"
                verticalSpacing="xs"
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Player</Table.Th>
                    {!isMobile && <Table.Th>Position</Table.Th>}
                    {!isMobile && <Table.Th>Number</Table.Th>}
                    {!isMobile && <Table.Th>Rating</Table.Th>}
                    
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {lightTeam.map((player) => (
                    <Table.Tr key={player.id}>
                      <Table.Td
                        onClick={() => handlePlayerSelection(player)}
                        style={{ cursor: 'pointer' }}
                      >
                        {!isMobile &&
                        <img
                          src={player.image}
                          alt={player.firstname + ' ' + player.lastname}
                          style={{ width: 50, height: 50, borderRadius: '50%' }}
                        />}
                        <Text>{player.firstname}</Text>
                      </Table.Td>

                      {!isMobile && <Table.Td>{player.position}</Table.Td>}
                      {!isMobile && <Table.Td>{player.number}</Table.Td>}
                      {!isMobile && (
                        <Table.Td>
                          <Chip color="blue" radius="xl">
                            {player.rating}
                          </Chip>
                        </Table.Td>
                      )}
                      <Table.Td>
                        <Button size='xs' color="red" onClick={() => handleRemovePlayer(player)}>
                          <IconTrash />
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Card>
        </Grid.Col>
        <Grid.Col span={12}>
          <ScrollArea style={{ height: 350 }}>
            <Table
              stickyHeader
              highlightOnHover
              withTableBorder
              captionSide="top"
              verticalSpacing="xs"
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Player</Table.Th>
                  <Table.Th>Position</Table.Th>
                  <Table.Th>Number</Table.Th>
                  <Table.Th>Rating</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {allPlayers.map((player) => (
                  <Table.Tr key={player.id}>
                    <Table.Td
                      onClick={() => handlePlayerSelection(player)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={player.image}
                        alt={player.firstname + ' ' + player.lastname}
                        style={{ width: 50, height: 50, borderRadius: '50%' }}
                      />
                      <Text>{player.firstname} {player.lastname}</Text>
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
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </NavbarLayout>
  );
}
