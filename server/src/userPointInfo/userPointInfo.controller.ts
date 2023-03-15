import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserPointInfoService } from "./userPointInfo.service";
import { UserPointInfoControllerBase } from "./base/userPointInfo.controller.base";

@swagger.ApiTags("userPointInfos")
@common.Controller("userPointInfos")
export class UserPointInfoController extends UserPointInfoControllerBase {
  constructor(
    protected readonly service: UserPointInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
