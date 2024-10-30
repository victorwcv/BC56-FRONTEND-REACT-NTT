import { mapCategory, mapCategories } from './category.mapper';
import { type CategoryAPI } from "../types/interfaces/api.interface";
import { type Category } from "../types/interfaces/category.interface";

describe('mapCategory', () => {
  it('should correctly map a CategoryAPI object to a Category object', () => {
    const categoryApi: CategoryAPI = {
      slug: 'electronics',
      name: 'Electronics',
      url: '/categories/electronics',
    };
    
    const expectedCategory: Category = {
      slug: 'electronics',
      name: 'Electronics',
      url: '/categories/electronics',
    };

    const result = mapCategory(categoryApi);
    expect(result).toEqual(expectedCategory);
  });

  it('should return undefined for missing properties in CategoryAPI', () => {
    const categoryApi = { slug: undefined, name: undefined, url: undefined } as unknown as CategoryAPI;
    const expectedCategory = { slug: undefined, name: undefined, url: undefined };

    const result = mapCategory(categoryApi);
    expect(result).toEqual(expectedCategory);
  });
});

describe('mapCategories', () => {
  it('should correctly map an array of CategoryAPI objects to an array of Category objects', () => {
    const categoriesApi: CategoryAPI[] = [
      { slug: 'electronics', name: 'Electronics', url: '/categories/electronics' },
      { slug: 'books', name: 'Books', url: '/categories/books' },
    ];

    const expectedCategories: Category[] = [
      { slug: 'electronics', name: 'Electronics', url: '/categories/electronics' },
      { slug: 'books', name: 'Books', url: '/categories/books' },
    ];

    const result = mapCategories(categoriesApi);
    expect(result).toEqual(expectedCategories);
  });

  it('should return an empty array when given an empty array', () => {
    const result = mapCategories([]);
    expect(result).toEqual([]);
  });

  it('should ignore extra properties in CategoryAPI', () => {
    const categoriesApi: CategoryAPI[] = [
      {
        slug: 'electronics',
        name: 'Electronics',
        url: '/categories/electronics',
        extraProp: 'ignored',
      } as CategoryAPI,
    ];

    const expectedCategories: Category[] = [
      { slug: 'electronics', name: 'Electronics', url: '/categories/electronics' },
    ];

    const result = mapCategories(categoriesApi);
    expect(result).toEqual(expectedCategories);
  });
});
