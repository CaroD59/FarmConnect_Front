import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StyledMarketPlaceReco from './styles';

function MarketPlaceReco() {
  const [appli, setAppli] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apps`).then(({ data }) => {
      setAppli(data);
    });
  }, []);

  return (
    <StyledMarketPlaceReco>
      <div className="RecoPage">
        <h1 className="titre">Recommandations</h1>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          className="Carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={3}
          swipeable
        >
          {appli.map((app) => {
            return (
              <div className="AppGallery" key={app.id}>
                <Link to={`/${app.id}/${app.name}`}>
                  <div className="card" aria-hidden="true">
                    <img src={app.logo} alt="banner" className="imageSize" />
                    <p className="name">{app.name}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </StyledMarketPlaceReco>
  );
}

export default MarketPlaceReco;
