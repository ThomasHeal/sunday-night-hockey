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
import { useMediaQuery } from '@mantine/hooks'; // Import useMediaQuery hook

import NextGameCard from '../../components/GameInformation/NextGameCard';
import { IconPhoto, IconDownload, IconArrowRight, IconIceSkating, IconSettings, IconUsersGroup} from '@tabler/icons-react';
import NavbarLayout from '@/components/NavBar/NavBar';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Check if screen width is less than 768px (mobile)
  //list of navigation items
  const navItems = [
    { name: 'Dashboard', icon: <IconIceSkating size={14} />,
    },
    { name: 'Photos', icon: <IconPhoto size={14} />,
    },
    { name: 'Teams', icon: <IconUsersGroup size={14} />,
    },
    { name: 'Settings', icon: <IconSettings size={14} />,

  }

  ];

  return (
    <NavbarLayout>
        <Grid>
          <Grid.Col span={12}>
            <Title order={1}>Dashboard</Title>
            <Text mt="lg">Welcome to the dashboard</Text>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 6}>
            <NextGameCard />
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 6}>
            <NextGameCard />
          </Grid.Col>
        </Grid>
    </NavbarLayout>
  );
}
