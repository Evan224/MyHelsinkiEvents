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

  export interface EventType {
    id: number;
    owner: string;
    title: string;
    description: string;
    picture: string;
    tags: string[];
    date: string;
    founder: string;
    founderDescription: string;
    location: string;
    duration: string;
    likes: number;
  }
}

declare namespace User {
  export enum UserRole {
    User = 1,
    ADMIN = 2,
  }
}
