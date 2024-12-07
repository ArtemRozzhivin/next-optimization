export interface GetResourcesParamsProps {
  category: string;
  page: string;
  query: string;
}

export interface Resource {
  _id: string;
  title: string;
  category: string;
  downloadLink: string;
  views: number;
  image: string;
  slug: string;
}
