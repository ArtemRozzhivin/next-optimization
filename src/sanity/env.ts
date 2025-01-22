export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-27';

export const datasetEnv =
  process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET;
export const projectIdEnv =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
export const editorTokenEnv =
  process.env.SANITY_STUDIO_EDITOR_TOKEN || process.env.NEXT_PUBLIC_SANITY_EDITOR_TOKEN;

export const dataset = assertValue(
  datasetEnv,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET',
);

export const projectId = assertValue(
  projectIdEnv,
  'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID',
);

export const editorToken = assertValue(
  editorTokenEnv,
  'Missing environment variable: NEXT_PUBLIC_SANITY_EDITOR_TOKEN',
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
