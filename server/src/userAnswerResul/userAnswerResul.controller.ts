import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserAnswerResulService } from "./userAnswerResul.service";
import { UserAnswerResulControllerBase } from "./base/userAnswerResul.controller.base";

@swagger.ApiTags("userAnswerResuls")
@common.Controller("userAnswerResuls")
export class UserAnswerResulController extends UserAnswerResulControllerBase {
  constructor(
    protected readonly service: UserAnswerResulService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
