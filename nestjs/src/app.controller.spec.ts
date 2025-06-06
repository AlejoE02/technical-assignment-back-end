import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getVenues: jest.fn().mockResolvedValue(
              Array.from({ length: 10 }, (_, i) => ({
                venue_id: i + 1,
                venue_name: `Venue ${i + 1}`,
                state: 'State',
                city: 'City',
                beds: 2,
              }))
            ),
          },
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService);
  });

  describe('getVenues', () => {
    it('should return an array of 10 venues', async () => {
      const result = await appController.getVenues('10');
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(10);
    });
  });
});