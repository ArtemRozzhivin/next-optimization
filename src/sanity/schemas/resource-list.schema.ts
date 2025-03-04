export const resourceListSchema = {
  name: 'resource-list',
  title: 'Resource List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'resource' }] }],
    },
  ],
};
