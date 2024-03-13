import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator/types/decorator/decorators";

export class CreateAdminDto {

    name: string;


    email: string;


    password: string;

}
