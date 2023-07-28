import React, { useRef, useEffect } from 'react';
import { AvatarProvider } from '@codebaby-avatars/codebaby-react';

function App() {
  const aProviderRef = useRef(null);
  useEffect(() => {
    const onResponse = () => {
      console.log('ResponseMessage');
    };
    const aProvider = aProviderRef.current;
    if(aProvider) {
      console.log('aProvider', aProvider);
      aProvider.on('onResponse', onResponse);
      return () => {
        aProvider.off('onResponse', onResponse);
      }
    }
  }, [aProviderRef]);

  return (
    <AvatarProvider
      // on ref will provide you an events handler instance
      // with listener (on, off) and emitter method
      ref={aProviderRef}
      // You could listen all codebaby events here
      // using lowerCamelCase like 'initialized' should be 'onInitialized'
      onInitialized={() => console.log('onInitialized')}
      id="avatar_159">
      <div className="container">
        <div className="logo">
          <img src="https://picsum.photos/id/237/1080/720" alt="Travel Logo"/>
          <h1>Travel</h1>
        </div>
        <div className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#img-1">Destinations</a></li>
            <li><a href="#img-2">Packages</a></li>
            <li><a href="#img-3">Contact</a></li>
          </ul>
        </div>
        <div id="home" className="hero">
          <img src="https://picsum.photos/id/1018/1080/720" alt="Beach"/>
          <div className="hero-content">
            <h2>Discover the world with us</h2>
            <p>Travel is a company that offers you the best deals on flights, hotels, and tours around the world. Whether you want to explore the ancient ruins of Rome, the exotic beaches of Thailand, or the majestic mountains of Nepal, we have something for you.</p>
            <a href="#bn">Book Now</a>
          </div>
        </div>
        <div className="gallery">
          <img src="https://picsum.photos/id/1019/1080/720" alt="Forest"/>
          <img id="img-1" src="https://picsum.photos/id/1020/1080/720" alt="City"/>
          <img src="https://picsum.photos/id/1021/1080/720" alt="Desert"/>
          <img id="img-2" src="https://picsum.photos/id/1022/1080/720" alt="Lake"/>
          <img src="https://picsum.photos/id/1023/1080/720" alt="Snow"/>
          <img id="img-3" src="https://picsum.photos/id/1024/1080/720" alt="Island"/>
        </div>
        <div className="footer">
          <p>© 2023 Travel. All rights reserved.</p>
          <ul>
            <li><a href="#fb">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#insta">Instagram</a></li>
          </ul>
        </div>
      </div>
    </AvatarProvider>
  );
}

export default App;
