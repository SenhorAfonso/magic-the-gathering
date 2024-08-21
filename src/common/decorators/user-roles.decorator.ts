import { SetMetadata } from '@nestjs/common';
import { UserRoles } from 'src/infraestructure/schemas/user.schema';

export const ROLES_KEY = 'key';
export const Roles = (...roles: UserRoles[]) => SetMetadata(ROLES_KEY, roles);
