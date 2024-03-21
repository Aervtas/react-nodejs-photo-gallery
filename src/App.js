import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function importAll(r) {
    return r.keys().map(r);
  }
  
  const photoFiles = importAll(require.context('./photos', false, /\.(png|jpe?g|svg|webp)$/));
  
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        setCurrentIndex((currentIndex - 1));
      }
    } else if (event.key === 'ArrowRight') {
      if (currentIndex < photoFiles.length - 1) {
        setCurrentIndex((currentIndex + 1));
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex]);
  
  return (
    <div className="App">
      {/* <h1>Photo Gallery</h1> */}
      <body>
        <div className='column'>
          <div className="card">
            <img src={photoFiles[currentIndex]} alt="Missing"></img>
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;

