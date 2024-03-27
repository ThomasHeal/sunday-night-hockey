import {
  AppShell,
  Burger,
  Group,
  Button,
  Title,
  NavLink,
} from '@mantine/core';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconHome,
  IconPhoto,
  IconSettings,
  IconUsersGroup,
  IconUser,
  
} from '@tabler/icons-react';

import { MdSportsHockey } from "react-icons/md";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  navDescription?: string;
}

interface NavbarLayoutProps {
  children: React.ReactNode;
}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 767px)');

  const navItems: NavItem[] = [
    { name: 'Dashboard',  icon: <IconHome size={14} />},
    { name: 'Players',  navDescription: "Player Information", icon: <IconUser size={14} /> },
    { name: 'Teams',  icon: <IconUsersGroup size={14} /> },
    { name: "Games", icon: <MdSportsHockey size={14} /> },
    { name: 'Settings', icon: <IconSettings size={14} /> },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Title order={4} mb={20}>
          Sunday Hockey
        </Title>

        <Button.Group orientation='vertical' >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              rightSection={item.icon}
              description={item.navDescription? item.navDescription : ""}
              label={item.name}
              href={item.name.toLocaleLowerCase()}
              mb="xs"
            >
            </NavLink>
          ))}
        </Button.Group>
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};

export default NavbarLayout;
