import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserAnswerResulServiceBase } from "./base/userAnswerResul.service.base";

@Injectable()
export class UserAnswerResulService extends UserAnswerResulServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
