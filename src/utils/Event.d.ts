declare namespace Event {
  export interface IEvent {
    id: number;
    ownerId: number;
    name: string;
    startTime: string;
    endTime: string;
    location: string;
    thumbnailUrl: string;
    description: string;
    visibility: number;
    createdAt: string;
    updatedAt: string;

    // Expand fields
    Tags: ITag[];
    Owner: IUser;
  }

  interface IUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    birthday: string;
    email: string;
    avatarUrl: string;
    introduction: string;
    status: number;
    createdAt: string;
    updatedAt: string;

    // Expand fields
    Events: IEvent[];
  }

  interface ITag {
    id: number;
    name: string;
    eventId: number;

    // Expand fields
    Event: IEvent;
  }

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
