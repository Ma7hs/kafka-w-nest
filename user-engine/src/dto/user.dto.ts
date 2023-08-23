import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, IsPhoneNumber, IsEnum } from "class-validator";


export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;
}
