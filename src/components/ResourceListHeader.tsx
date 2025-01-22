interface IResourceListHeaderProps {
  title: string;
  search?: string;
  category?: string;
}

const ResourceListHeader = ({ search, category, title }: IResourceListHeaderProps) => {
  if (search && category) {
    return (
      <h1 className='heading3 self-start text-white-800'>
        Search results for "{search}" in <span className='capitalize'>{category}</span>
      </h1>
    );
  }

  if (search) {
    return <h1 className='heading3 self-start text-white-800'>Search results for "{search}"</h1>;
  }

  if (category) {
    return (
      <h1 className='heading3 self-start text-white-800'>
        <span className='capitalize'>{category}</span>
      </h1>
    );
  }

  return <h1 className='heading3 self-start text-white-800'>{title}</h1>;
};

export default ResourceListHeader;
