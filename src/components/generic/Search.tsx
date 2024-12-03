import { useState } from 'react';
import MiniSearch from 'minisearch';

const Search = ({ searchList }: { searchList: Record<string, any>[] }) => {
  const miniSearch = new MiniSearch({
    fields: ['slug', 'data.title', 'body'], // fields to index for full-text search
    storeFields: ['data', 'slug'], // fields to return with search results
  });
  miniSearch.addAll(searchList);
  // Following code
  const [query, setQuery] = useState('');
  // Set a limit to the posts: 5
  const posts = miniSearch.search(query, { prefix: true }).slice(0, 5);

  const handleOnSearch = ({ target = {} }) => {
    const { value } = target as HTMLInputElement;
    setQuery(value);
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-screen lg:w-3/5'>
          <input
            type='text'
            id='search'
            value={query}
            onChange={handleOnSearch}
            className='block w-full p-4 pl-10
                                text-gray-900 
                               border-2	border-black
                               rounded-full bg-white
                               drop-shadow-custom-1
                               focus:outline-none
                               focus:drop-shadow-custom-2
                               sanchez'
            placeholder='Cerca nella wiki e nel blog'
          />
        </div>
      </div>

      {query.length > 1 && (
        <div className='my-4'>
          {posts.length === 1 ? 'Trovato' : 'Trovati'} {posts.length}{' '}
          {posts.length === 1 ? 'risultato' : 'risultati'} per '{query}'
        </div>
      )}

      <ul className='list-none'>
        {posts &&
          posts.map((post) => (
            <li className='py-2 brutal-card poppins' key={post?.id}>
              <a href={`/blog/${post.id}`}>
                <p className='text-lg md:text-xl hover:underline underline-offset-2'>
                  {post.data.title}
                </p>
                <p className='text-sm text-gray-800'>{post.data.description}</p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Search;
