export interface Resource {
  _id: string;
  title: string;
  downloadLink: string;
  image: string;
  views: number;
  category: string;
}

export interface Playlist {
  _id: string;
  title: string;
  resources: Resource[];
}
