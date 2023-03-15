import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPointInfoServiceBase } from "./base/userPointInfo.service.base";

@Injectable()
export class UserPointInfoService extends UserPointInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
