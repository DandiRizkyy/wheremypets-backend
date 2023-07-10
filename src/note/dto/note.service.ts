/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNote } from './create-note.dto';

@Injectable()
export class NoteService {
  constructor(private prismaService: PrismaService) {}

  async getAllNotes() {
    await this.prismaService.note.findMany();
  }

  async getNoteById(id: number) {
    await this.prismaService.note.findUnique({
      where: { id },
    });
  }

  async createNote({ title, description }: CreateNote) {
    await this.prismaService.note.create({
      data: { title, description },
    });
  }

  async deleteNote(id: number) {
    await this.prismaService.note.delete({
      where: { id },
    });
  }
}
