import { describe, it, expect, vi, afterEach } from 'vitest';
import { getCategories, getAllProducts, getProductsByCategory } from './market.service';
import { mapCategories } from '../mappers/category.mapper';
import { mapProducts } from '../mappers/product.mapper';
import { Endpoints } from '../types/enums/endPoints.enum';
import { type CategoryAPI } from '../types/interfaces/api.interface';
import { Errormessages } from '../types/enums/errorMesages.enum';
import { mockProductsAPI } from '../mock/productsAPI.mock';

const URL_CATEGORIES = Endpoints.CATEGORIES;
const URL_PRODUCTS = Endpoints.PRODUCTS;

vi.mock('../mappers/category.mapper', () => ({
  mapCategories: vi.fn(),
}));

vi.mock('../mappers/product.mapper', () => ({
  mapProducts: vi.fn(),
}));

describe('API functions', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('getCategories', () => {
    it('should fetch categories and map them successfully', async () => {
      const mockData: CategoryAPI[] = [/* datos de categorías de ejemplo */];
      const mappedCategories = [{ id: 1, name: 'Category 1' }];

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      } as Response);

      (mapCategories as jest.Mock).mockReturnValue(mappedCategories);

      const result = await getCategories();
      expect(fetch).toHaveBeenCalledWith(URL_CATEGORIES);
      expect(mapCategories).toHaveBeenCalledWith(mockData);
      expect(result).toEqual(mappedCategories);
    });

    it('should throw an error if fetching categories fails', async () => {
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Error al obtener las categorias' }),
      } as Response);

      await expect(getCategories()).rejects.toThrow('Error al obtener las categorias');
    });
  });

  describe('getAllProducts', () => {
    it('should fetch products and map them successfully', async () => {
      const mappedProducts = [{ id: 1, name: 'Product 1' }];

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockProductsAPI,
      } as Response);

      (mapProducts as jest.Mock).mockReturnValue(mappedProducts);

      const result = await getAllProducts();
      expect(fetch).toHaveBeenCalledWith(`${URL_PRODUCTS}?limit=30&skip=0`);
      expect(mapProducts).toHaveBeenCalledWith(mockProductsAPI);
      expect(result).toEqual(mappedProducts);
    });

    it('should throw an error if fetching products fails', async () => {
      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Error al obtener los productos' }),
      } as Response);

      await expect(getAllProducts()).rejects.toThrow('Error al obtener los productos');
    });
  });

  describe('getProductsByCategory', () => {
    it('should fetch products by category and map them successfully', async () => {
      const category = 'electronics';
      const mappedProducts = [{ id: 1, name: 'Product 1' }];

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockProductsAPI,
      } as Response);

      (mapProducts as jest.Mock).mockReturnValue(mappedProducts);

      const result = await getProductsByCategory(category);
      expect(fetch).toHaveBeenCalledWith(`${URL_PRODUCTS}/category/${category}`);
      expect(mapProducts).toHaveBeenCalledWith(mockProductsAPI);
      expect(result).toEqual(mappedProducts);
    });

    it('should return undefined when category is "all"', async () => {
      const result = await getProductsByCategory('all');
      expect(result).toBeUndefined();
    });

    it('should log an error message if fetching products by category fails', async () => {
      const category = 'electronics';
      const errorMessage = Errormessages.ERROR_GETTING_PRODUCTS;

      global.fetch = vi.fn().mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Error al obtener los productos' }),
      } as Response);

      const consoleSpy = vi.spyOn(console, 'error');
      await getProductsByCategory(category);

      expect(consoleSpy).toHaveBeenCalledWith(errorMessage, expect.any(Error));
      consoleSpy.mockRestore();
    });
  });
});
