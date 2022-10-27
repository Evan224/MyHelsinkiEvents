export interface EventCardProps {
  picture?: string;
  title: string;
  date: {
    month: string;
    day: string;
  };
  description: string;
  tags?: string[];
}

export interface EventListProps {
  events: EventCardProps[];
  cssStyle?: string;
}
