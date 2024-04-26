import { Module } from '@nestjs/common';
import { databaseProviders } from './config/db';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }