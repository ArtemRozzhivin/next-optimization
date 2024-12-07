import { groq } from 'next-sanity';
import { GetResourcesParamsProps, Resource } from './types';
import { buildQuery } from './utils';
import { editorClient } from './lib/client';

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
