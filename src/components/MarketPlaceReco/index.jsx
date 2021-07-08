import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StyledMarketPlaceReco from './styles';

function MarketPlaceReco() {
  const [appli, setAppli] = useState([]);
  const id = useParams();
  const history = useHistory();
  const appHandler = (e) => {
    e.preventDefault();
    history.push(`/apps/${id}`);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/apps`).then(({ data }) => {
      setAppli(data);
    });
  }, []);

  return (
    <div onClick={appHandler} onKeyDown={appHandler} aria-hidden="true">
      <StyledMarketPlaceReco>
        <h1 className="titre">Recommandations</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
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
              items: 4,
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
                <div className="card">
                  <div className="image">
                    <img src={app.banner} alt="banner" className="imageSize" />
                  </div>
                  <div className="infos">
                    <div className="societe">
                      <p className="name">{app.name}</p>
                      <p className="activite">{app.provider_app}</p>
                    </div>
                    <div className="button">Infos</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </StyledMarketPlaceReco>
    </div>
  );
}

export default MarketPlaceReco;
