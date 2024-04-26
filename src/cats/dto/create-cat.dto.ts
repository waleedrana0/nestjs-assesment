import { IsNotEmpty, IsEmail } from "class-validator";
export class CreateCatDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    age: number;
    @IsNotEmpty()
    breed: string;
    isDeleted: boolean;
}
