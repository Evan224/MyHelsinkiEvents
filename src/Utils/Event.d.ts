declare namespace Event {
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
}

declare namespace User {
  export enum UserRole {
    User = 1,
    ADMIN = 2,
  }
}
