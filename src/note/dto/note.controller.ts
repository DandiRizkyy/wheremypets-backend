/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { CreateNote } from './create-note.dto';

@Controller('notes')
@ApiTags('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  // get all notes
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  // @ApiOkResponse({ type: UserEntity, isArray: true })
  @Get()
  async getAllUsers() {
    return await this.noteService.getAllNotes();
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get()
  async getNoteById(id: number) {
    return await this.noteService.getNoteById(id);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post()
  async createNote(@Body() dto: CreateNote) {
    return await this.noteService.createNote(dto);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async deleteNote(id: number) {
    return await this.noteService.deleteNote(id);
  }
}
