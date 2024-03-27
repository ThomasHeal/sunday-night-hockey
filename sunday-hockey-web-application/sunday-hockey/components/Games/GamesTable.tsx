
import { Button, Table } from '@mantine/core';
import React, { useState } from 'react';
import { notifications } from '@mantine/notifications'; // Import notifications from Mantine

const initialGameInfo  = [
    {
        date: 'Sunday, April 16th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,
    },
    {
        date: 'Sunday, April 23rd, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, April 30th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, May 7th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, May 14th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, May 21st, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, May 28th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, June 4th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, June 11th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, June 18th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, June 25th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, July 2nd, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, July 9th, 2024',
        time: '8:00 PM',
        arena: 'Cambridge Sports Park',
        reminder: false,

    },
    {
        date: 'Sunday, July 16th, 2024',
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
        notifications.show({
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
      <Table highlightOnHover withTableBorder captionSide='top' verticalSpacing="xs">
        <Table.Tbody>
          {ths}
          {rows}
        </Table.Tbody>
      </Table>
    );
  }