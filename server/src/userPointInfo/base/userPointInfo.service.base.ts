/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserPointInfo, User } from "@prisma/client";

export class UserPointInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UserPointInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPointInfoFindManyArgs>
  ): Promise<number> {
    return this.prisma.userPointInfo.count(args);
  }

  async findMany<T extends Prisma.UserPointInfoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPointInfoFindManyArgs>
  ): Promise<UserPointInfo[]> {
    return this.prisma.userPointInfo.findMany(args);
  }
  async findOne<T extends Prisma.UserPointInfoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPointInfoFindUniqueArgs>
  ): Promise<UserPointInfo | null> {
    return this.prisma.userPointInfo.findUnique(args);
  }
  async create<T extends Prisma.UserPointInfoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPointInfoCreateArgs>
  ): Promise<UserPointInfo> {
    return this.prisma.userPointInfo.create<T>(args);
  }
  async update<T extends Prisma.UserPointInfoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPointInfoUpdateArgs>
  ): Promise<UserPointInfo> {
    return this.prisma.userPointInfo.update<T>(args);
  }
  async delete<T extends Prisma.UserPointInfoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserPointInfoDeleteArgs>
  ): Promise<UserPointInfo> {
    return this.prisma.userPointInfo.delete(args);
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.userPointInfo
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}
