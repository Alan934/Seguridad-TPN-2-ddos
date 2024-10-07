import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            getAll: jest.fn().mockResolvedValue(['user1', 'user2']),
            getOne: jest.fn().mockImplementation((id: number) => Promise.resolve({ id, nombre: 'user' })),
            create: jest.fn().mockImplementation((dto: CreateUserDto) => Promise.resolve({ id: 1, ...dto })),
            update: jest.fn().mockImplementation((id: number, dto: UpdateUserDto) => Promise.resolve({ id, ...dto })),
            delete: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('debería estar definido', () => {
    expect(usersController).toBeDefined();
  });

  describe('getAll', () => {
    it('debería retornar todos los usuarios', async () => {
      expect(await usersController.getAll()).toEqual(['user1', 'user2']);
    });
  });

  describe('getOne', () => {
    it('debería retornar un usuario por ID', async () => {
      const id = 1;
      expect(await usersController.getOne(id)).toEqual({ id, nombre: 'user' });
    });
  });

  describe('create', () => {
    it('debería crear un nuevo usuario', async () => {
      const dto: CreateUserDto = { nombre: 'new user', apellido: 'new user', edad : 12, email: 'test@test.com', password: 'password123' };
      expect(await usersController.create(dto)).toEqual({
        id: 1,
        ...dto,
      });
    });
  });

  describe('update', () => {
    it('debería actualizar un usuario', async () => {
      const id = 1;
      const dto: UpdateUserDto = { edad: 13 };
      
      expect(await usersController.update(id, dto)).toEqual({
        id,
        ...dto,
      });
    });
  });

  describe('delete', () => {
    it('debería eliminar un usuario', async () => {
      const id = 1;
      expect(await usersController.delete(id)).toBe(true);
    });
  });
});
