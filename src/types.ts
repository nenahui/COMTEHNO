export interface InfoItem {
  title: string;
  description: string;
}

export interface ApiMessage {
  message: string;
  nickname: string;
  timestamp: string;
  teacher: {
    email: string;
  };
}

export interface UserMessage {
  message: string;
  nickname: string;
}

export interface UserAuth {
  email: string;
  password: string;
}

export interface User {
  uid: string;
  metadata: {
    lastLoginInTime: string | undefined;
  };
  email: string | null;
}
