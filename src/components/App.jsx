import { useState, useEffect, useRef } from 'react';

//  import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';

import { fetchImages } from 'services/Api';

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!inputValue) {
      return;
    } else {
      setStatus('pending');

      fetchImages(inputValue, page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`we cant find any photo by ${inputValue}`)
          );
        })
        .then(data => {
          setTotalHits(data.totalHits);
          const hits = data.hits;

          setImages([...images, ...hits]);
          setStatus('resolved');
          if (hits.length === 0) {
            return Promise.reject(
              new Error(`no results found ${inputValue}`)
            );
          }
        })
        .catch(error => {
          setStatus('rejected');
          setError(error);
        });
    }
  }, [page, inputValue]);

  const handleFormSubmit = input => {
    setInputValue(input);
    setPage(1);
    if(inputValue!==input){
      setImages([]);
    }
  };

  const loadMore = event => {
    setPage(state => state + 1);
  };
  return (
    <div>
      {/* <Searchbar onSubmi={handleFormSubmit} />
      <ImageGallery
        images={images}
        error={error}
        status={status}
        onClick={loadMore}
        hits={totalHits}
      /> */}
    </div>
  );
}
