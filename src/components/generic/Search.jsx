import Fuse from 'fuse.js';
import { useState } from 'react';

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ['frontmatter.title', 'frontmatter.description', 'frontmatter.slug'],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  // Following code
  const [query, setQuery] = useState('');
  const fuse = new Fuse(searchList, options);
  // Set a limit to the posts: 5
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-screen lg:w-3/5'>
          <input
            type='text'
            id='search'
            value={query}
            onChange={handleOnSearch}
            className='block w-full p-4 pl-10 text-sm 
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
            <li
              className='py-2 brutal-card poppins'
              key={post?.frontmatter.slug}
            >
              <a href={`/blog/${post.frontmatter.slug}`}>
                <p className='text-lg md:text-xl hover:underline underline-offset-2'>
                  {post.frontmatter.title}
                </p>
                <p className='text-sm text-gray-800'>
                  {post.frontmatter.description}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Search;
