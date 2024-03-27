import cx from 'clsx';
import {
  MantineProvider,
  Container,
  createTheme,
  Title,
  Image,
  Card,
  Group,
  Text,
  Badge,
  Button,
  Rating,
  Flex,
} from '@mantine/core';

export default function PhotoContainer({ player }: { player: any }) {
  const players = player;
  console.log(players);

  return (
    <Container size="xs">
      <Card shadow="md" padding="lg" mt="lg" mb="lg" radius="md">
        <Card.Section inheritPadding m="xs">
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{players.name}</Text>
          </Group>
          <Card.Section inheritPadding mt="xs" pb="sm">
            <Image radius="md" src={players.image} />
          </Card.Section>

          <Text size="sm" c="dimmed">
            Position: {players.position}
          </Text>
          <Flex gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap">
            <Text size="sm" c="dimmed">
              Number: {players.number}
            </Text>
            <Rating fractions={2} readOnly value={players.rating} />
          </Flex>
          <Group mt="md" gap="xs" preventGrowOverflow={false} grow  wrap='nowrap'>
              <Button color="blue" radius="md">
                Info
              </Button>
              <Button color="red" radius="md">
                Delete
              </Button>
          </Group>
        </Card.Section>
      </Card>
    </Container>
  );
}
