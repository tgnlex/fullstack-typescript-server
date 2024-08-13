

export interface Post {
  id: number;
  updatedAt: string;
  createdAt: string;
  title: string;
  content: string | null;
  published: boolean;
}
