export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  constructor(title: string, body: string, id = 0, userId = 0) {
    this.title = title;
    this.body = body;
    this.id = id;
    this.userId = this.userId;
  }
}
