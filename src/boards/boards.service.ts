import { Injectable, NotFoundException } from '@nestjs/common';
// import { BoardStatus } from './boards-status.enum';
// import { v1 as uuid } from 'uuid';
// import { CreateBoardDto } from './dto/create-board.dto';
// import { BoardRepository } from './boards.repository';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Board } from './boards.entity';

@Injectable()
export class BoardsService {
  // constructor(
  //   @InjectRepository(BoardRepository)
  //   private boardRepository: BoardRepository,
  // ) {}
  // async getBoardById(id: number): Promise<Board> {
  //   const found = await this.boardRepository.findOne(id);
  //   if (!found) {
  //     throw new NotFoundException(`${id} not found!`);
  //   }
  //   return found;
  // }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((item) => item.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with ${id}`);
  //   }
  //   return found;
  // }
  // updateBoardById(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
  // deleteBoardById(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((item) => item.id !== found.id);
  // }
}
