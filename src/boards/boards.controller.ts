import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Post('/')
  createBoard(@Body() body): Board {
    const { title, description } = body;
    return this.boardService.createBoard(title, description);
  }
}
