import './App.css';
import { useState, useEffect, useCallback } from 'react';

function getPhotos() {
  function importAll(r) {
    return r.keys().map(r);
  }
  return importAll(require.context('./photos', false, /\.(png|jpe?g|svg|webp)$/));
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photoFiles = getPhotos();
  
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        setCurrentIndex((currentIndex - 1));
      }
    } else if (event.key === 'ArrowRight') {
      if (currentIndex < photoFiles.length - 1) {
        setCurrentIndex((currentIndex + 1));
      }
    }
  }, [currentIndex, photoFiles.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, handleKeyDown]);
  
  return (
    <div className="App">
      {/* <h1>Photo Gallery</h1> */}
      <body>
        <div className='column'>
          <div className="card">
            <img src={photoFiles[currentIndex]} alt="Missing"></img>
            <div className="container">
              <h2>Kyoto</h2>
              <p className="title">The Beginning of the Philosophers Path</p>
              <p>Taken at the golden hours after walking the Philosopher's Path and missing temple hours. Remember if you want to go to the Higashiyama Jisho-ji and Ginkaku
               temples at the end of the Philosopher's Path, they close early.</p>
              <p>Google Maps: 35.01539920647518, 135.79562136190805</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

