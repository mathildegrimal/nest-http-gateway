import { IsNotEmpty, IsAlphanumeric } from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsAlphanumeric()
  firstname: string;

  @IsNotEmpty()
  lastname: string;
}
