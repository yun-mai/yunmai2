import { Module } from "@nestjs/common";
import { UserPointInfoModuleBase } from "./base/userPointInfo.module.base";
import { UserPointInfoService } from "./userPointInfo.service";
import { UserPointInfoController } from "./userPointInfo.controller";
import { UserPointInfoResolver } from "./userPointInfo.resolver";

@Module({
  imports: [UserPointInfoModuleBase],
  controllers: [UserPointInfoController],
  providers: [UserPointInfoService, UserPointInfoResolver],
  exports: [UserPointInfoService],
})
export class UserPointInfoModule {}
