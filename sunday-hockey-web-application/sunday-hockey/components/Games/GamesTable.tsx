
import { Button, Table } from '@mantine/core';
import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const initialGameInfo  = [
    {
        date: 'Sunday, March 31st, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, April 14th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, April 28th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, May 12th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, May 26th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, June 9th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, June 23rd, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, July 7th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, July 21st, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, August 4th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, August 18th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, September 1st, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, September 15th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
]

export default function GamesTable() {
    const [gameInfo, setGameInfo] = useState(initialGameInfo);
  
    // Function to update reminder and change button text
    const updateReminder = (index : any) => {
      setGameInfo(prevGameInfo => {
        const updatedGameInfo = [...prevGameInfo];
        updatedGameInfo[index] = { ...updatedGameInfo[index], reminder: !updatedGameInfo[index].reminder };
        Notifications.show({
          title: 'Reminder Sent',
          message: `Reminder sent for ${updatedGameInfo[index].date}`,
          color: 'blue',
        });

        

        return updatedGameInfo;
      });
    }
  
    const rows = gameInfo.map((game, index) => (
      <Table.Tr key={game.date}>
        <Table.Td>{game.date}</Table.Td>
        <Table.Td>{game.time}</Table.Td>
        <Table.Td>{game.arena}</Table.Td>
        <Table.Td>
          <Button onClick={() => updateReminder(index)} color={game.reminder ? 'green' : 'blue'}>
            {game.reminder ? 'Reminder Sent' : 'Send Reminder'}
          </Button>
        </Table.Td>
      </Table.Tr>
    ));
  
    const ths = (
      <Table.Tr>
        <Table.Th>Date</Table.Th>
        <Table.Th>Time</Table.Th>
        <Table.Th>Arena</Table.Th>
      </Table.Tr>
    );
  
    return (
      <MantineProvider>
        <Notifications />
      <Table highlightOnHover withTableBorder captionSide='top' verticalSpacing="xs">
        <Table.Tbody>
          {ths}
          {rows}
        </Table.Tbody>
      </Table>
    </MantineProvider>

    );

  }