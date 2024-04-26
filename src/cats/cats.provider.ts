import { Injectable } from '@nestjs/common';
import { Cats } from 'src/entities/cats.entity';
import { DataSource } from 'typeorm';

export const catsProviders = [
    {
        provide: 'CAT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Cats),
        inject: ['DATA_SOURCE'],
    },
];