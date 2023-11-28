export class CreateBookDto {
  readonly title: string;
  readonly author: number;
  readonly rating: number;
  readonly notes: string[];
  readonly completion_status: 'readed' | 'in_progress';
}
