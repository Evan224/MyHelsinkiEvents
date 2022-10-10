interface EventCardProps {
  picture: string;
  title: string;
  date: {
    month: string;
    day: string;
  };
  description: string;
}

interface EventListProps {
  events: EventCardProps[];
}
