export interface ICollectionAttribute {
  Title: string;
  Slug: string;
}

export interface ICategory {
  id: number;
  attributes: ICollectionAttribute;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IImage {
  data: {
    attributes: {
      url: string;
      formats: {
        url: string;
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IArticleAttributes {
  Title: string;
  Slug: string;
  createdAt: string;
  body: string;
  image: IImage;
  author: IAuthor;
}

export interface IArticle<> {
  id: number;
  attributes: IArticleAttributes;
}
