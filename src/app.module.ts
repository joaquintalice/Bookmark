import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModule, BookmarkModule, UserModule,
    ConfigModule.forRoot(),
    PrismaModule],
  providers: [PrismaService],
})
export class AppModule { }
