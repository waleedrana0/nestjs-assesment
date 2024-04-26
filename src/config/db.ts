import { Cats } from 'src/entities/cats.entity';
import { User } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                entities: [
                    Cats, User
                    // 'src/entities/*.entity{.ts,.js}',
                    // 'dist/entities/*.entity{.ts,.js}'
                ],
                synchronize: true,
                logging: true,
            });

            return dataSource.initialize();
        },
    },
];