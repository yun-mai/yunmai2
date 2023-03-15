import { Module } from "@nestjs/common";
import { UserAnswerResulModuleBase } from "./base/userAnswerResul.module.base";
import { UserAnswerResulService } from "./userAnswerResul.service";
import { UserAnswerResulController } from "./userAnswerResul.controller";
import { UserAnswerResulResolver } from "./userAnswerResul.resolver";

@Module({
  imports: [UserAnswerResulModuleBase],
  controllers: [UserAnswerResulController],
  providers: [UserAnswerResulService, UserAnswerResulResolver],
  exports: [UserAnswerResulService],
})
export class UserAnswerResulModule {}
