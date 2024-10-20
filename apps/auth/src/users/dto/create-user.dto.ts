import { IsEmail, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;

    password: string;
}