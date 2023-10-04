export class ProductCategoryDto {
  id: string;
  title: string;
  type: string;
}

export class ProductCategoriesDto {
  count: number;
  categories: ProductCategoryDto[];
}
