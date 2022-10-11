interface EventCardProps {
  picture?: string;
  title: string;
  date: {
    month: string;
    day: string;
  };
  description: string;
  tags?: string[];
}

interface EventListProps {
  events: EventCardProps[];
  cssStyle?: string;
}
