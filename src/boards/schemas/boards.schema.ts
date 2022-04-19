import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BoardStatus } from '../boards-status.enum';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  @Prop()
  id: string;

  @Prop()
  title: number;

  @Prop()
  description: string;

  @Prop()
  status: BoardStatus;
}

export const BoardDocument = SchemaFactory.createForClass(Board);
