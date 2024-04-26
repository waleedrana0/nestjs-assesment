import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Repository } from 'typeorm';
import { Cats } from 'src/entities/cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject("CAT_REPOSITORY")
    private catRepository: Repository<Cats>
  ) { }
  async create(createCatDto: CreateCatDto) {
    createCatDto.isDeleted = false;
    await this.catRepository.save(createCatDto);
    return createCatDto;
  }

  findAll() {
    let cats = this.catRepository.find({
      where: {
        isDeleted: false
      }
    })
    return cats;
  }

  findOne(id: number) {
    // return `This action returns a #${id} cat`;
    let cat = this.catRepository.findOne({
      where: {
        id: id
      }
    })
    return cat;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    // return `This action updates a #${id} cat`;
    let cat = this.catRepository.update(id, updateCatDto);
    return cat;
  }

  remove(id: number) {
    // return `This action removes a #${id} cat`;
    let cat = this.catRepository.update(id, { isDeleted: true });
    return cat;
  }
}
