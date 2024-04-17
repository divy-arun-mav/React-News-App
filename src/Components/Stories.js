import React, { useEffect } from 'react';
import { useGlobalContext } from './Context';

const Stories = () => {
  const { hits , isLoading , removePost } = useGlobalContext();

  if (isLoading) {
    return<h4 className='load-text'>Loading...</h4>
  }

  return (
    <div className='stories-div'>
      {hits.map((curPost) => {
        const { title, author, num_comments, objectID, url } = curPost;
        return <div key = { objectID }>
          <div className='card'>
            <h2 className='title'>{title}</h2>
            <p>
              By: {author} | {num_comments} comments
            </p>
            <div className='card-button'>
              <a className='more' href={url} target='_blank'>Read More</a>
              <a className='remove' target='_blank' onClick={() => removePost(objectID)}>Remove</a>
            </div>
          </div>
        </div>
      })}
    </div>
  );
};

export default Stories;
