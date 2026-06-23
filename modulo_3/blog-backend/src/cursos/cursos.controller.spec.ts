import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

const CURSO_ID     = 'aaaaaaaaaaaaaaaaaaaaaaaa';
const NOT_FOUND_ID = '999999999999999999999999';

describe('CursosController', () => {
  let controller: CursosController;

  const mockCursosService = {
    create:  jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update:  jest.fn(),
    remove:  jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosController],
      providers: [
        { provide: CursosService, useValue: mockCursosService },
      ],
    }).compile();

    controller = module.get<CursosController>(CursosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─────────────────────────────────────────────────────────────
  describe('create()', () => {

    it('should return SuccessResponseDto with created curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS Avanzado', instructor: 'Ana García' };
      mockCursosService.create.mockResolvedValue(mockCurso);

      const result = await controller.create({ title: 'NestJS Avanzado', instructor: 'Ana García' });
      expect(result).toEqual({ success: true, message: 'Curso created successfully', data: mockCurso });
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockCursosService.create.mockResolvedValue(null);
      await expect(controller.create({ title: 'x', instructor: 'y' }))
        .rejects.toThrow(InternalServerErrorException);
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findAll()', () => {

    const mockPagination = {
      items: [{ id: CURSO_ID, title: 'NestJS Avanzado' }],
      meta: { currentPage: 1, totalPages: 1, itemCount: 1, totalItems: 1, itemsPerPage: 10 },
    };

    it('should return SuccessResponseDto with paginated cursos', async () => {
      mockCursosService.findAll.mockResolvedValue(mockPagination);
      const result = await controller.findAll({ page: 1, limit: 10 });
      expect(result.data).toEqual(mockPagination);
      expect(result.success).toBe(true);
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockCursosService.findAll.mockResolvedValue(null);
      await expect(controller.findAll({ page: 1, limit: 10 }))
        .rejects.toThrow(InternalServerErrorException);
    });

    it('should cap limit to 100 when limit exceeds 100', async () => {
      mockCursosService.findAll.mockResolvedValue(mockPagination);
      const query = { page: 1, limit: 200 };
      await controller.findAll(query);
      expect(mockCursosService.findAll).toHaveBeenCalledWith(
        expect.objectContaining({ limit: 100 })
      );
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findOne()', () => {

    it('should return SuccessResponseDto with curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS Avanzado' };
      mockCursosService.findOne.mockResolvedValue(mockCurso);

      const result = await controller.findOne(CURSO_ID);
      expect(result).toEqual({ success: true, message: 'Curso retrieved successfully', data: mockCurso });
    });

    it('should throw NotFoundException when curso does not exist', async () => {
      mockCursosService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('update()', () => {

    it('should return SuccessResponseDto with updated curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS v2' };
      mockCursosService.update.mockResolvedValue(mockCurso);

      const result = await controller.update(CURSO_ID, { title: 'NestJS v2' });
      expect(result).toEqual({ success: true, message: 'Curso updated successfully', data: mockCurso });
    });

    it('should throw NotFoundException when curso does not exist', async () => {
      mockCursosService.update.mockResolvedValue(null);
      await expect(controller.update(NOT_FOUND_ID, { title: 'x' }))
        .rejects.toThrow(NotFoundException);
    });

    it('should call service.update with the correct id and dto', async () => {
      mockCursosService.update.mockResolvedValue({ id: CURSO_ID, title: 'Nuevo' });
      const dto = { title: 'Nuevo' };
      await controller.update(CURSO_ID, dto);
      expect(mockCursosService.update).toHaveBeenCalledWith(CURSO_ID, dto);
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('remove()', () => {

    it('should return SuccessResponseDto with deleted curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS Avanzado' };
      mockCursosService.remove.mockResolvedValue(mockCurso);

      const result = await controller.remove(CURSO_ID);
      expect(result).toEqual({ success: true, message: 'Curso deleted successfully', data: mockCurso });
    });

    it('should throw NotFoundException when curso does not exist', async () => {
      mockCursosService.remove.mockResolvedValue(null);
      await expect(controller.remove(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

    it('should call service.remove with the correct id', async () => {
      mockCursosService.remove.mockResolvedValue({ id: CURSO_ID });
      await controller.remove(CURSO_ID);
      expect(mockCursosService.remove).toHaveBeenCalledWith(CURSO_ID);
    });

  });

});