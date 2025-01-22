import { createClient } from 'next-sanity';

import { apiVersion, dataset, editorToken, projectId } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const editorClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: editorToken,
});
