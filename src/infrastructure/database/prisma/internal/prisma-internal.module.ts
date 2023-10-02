import { Module } from "@nestjs/common";
import { PrismaService } from "@nb/infrastructure/database/prisma/internal/services/prisma.service";

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaInternalModule {
}