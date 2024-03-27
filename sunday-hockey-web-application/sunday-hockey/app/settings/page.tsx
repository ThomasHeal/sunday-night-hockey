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
import { IconPhoto, IconDownload, IconArrowRight, IconIceSkating, IconSettings, IconUsersGroup} from '@tabler/icons-react';
import NavbarLayout from '@/components/NavBar/NavBar';

export default function BasicAppShell() {
  return (

    <NavbarLayout>
    
      <Title order={4} mb={20}>Sunday Hockey</Title>
        <Grid>
          <Grid.Col span={12}>
            <Title order={1}>Settings</Title>
            <Text mt="lg">Change Settings Here</Text>
          </Grid.Col>
          <Grid.Col span={6}>
          </Grid.Col>
        </Grid>
        </NavbarLayout> 
  );
}
