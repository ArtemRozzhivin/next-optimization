import { groq } from 'next-sanity';
import { GetResourcesParamsProps, Resource } from './types';
import { buildQuery } from './utils';
import { client, editorClient } from './lib/client';

export const getResources = async (params: GetResourcesParamsProps): Promise<Resource[]> => {
  const { category, page, query } = params;

  try {
    const resource = await editorClient.fetch(
      groq`${buildQuery({ type: 'resource', query, category, page: parseInt(page) })}{
        _id,
        title,
        category,
        downloadLink,
        views,
        "image": poster.asset->url,
        slug,
        }`,
    );

    return resource;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// export const getResourcesPlaylist = async () => {
//   try {
//     const resource = await client.fetch(
//       groq`*[_type == "resource-list"]{
//         _id,
//         title,
//         resources[0...6]->{
//           _id,
//           title,
//           category,
//           downloadLink,
//           views,
//           "image": poster.asset->url,
//           slug,
//           }
//         }`,
//     );

//     console.log('Resources', resource);

//     return resource;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };

export const getResourcesPlaylist = async () => {
  try {
    const resource = await client.fetch(groq`*[_type == "resource-list"]{
      _id,
      title,
      resources[0...6]->{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        category
      }
    }`);

    return resource[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};
