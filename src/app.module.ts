import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostsModule } from "./modules/posts/posts.module";

@Module({
	imports: [PostsModule, PrismaModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
