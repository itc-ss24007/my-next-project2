export type News = {
  id: string;
  title: string;
  cataegory: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

export type Category = {
  name: string;
};
