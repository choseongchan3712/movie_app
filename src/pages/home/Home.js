import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { ORIGINAL_URL, W500_URL } from "../../constant/imgUrl";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  padding: 0 ${mainStyle.moPadding};
  position: relative;
  color: #fff;
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
`;

const TitleWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 150px;
  left: 0;
  padding: 0 ${mainStyle.moPadding};
  h3 {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    opacity: 0.7;
  }

  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
    width: 60%;

    h3 {
      font-size: 50px;
    }

    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
`;

const Container = styled.div`
  color: #fff;
  padding: 0 ${mainStyle.moPadding};
  @media screen and (max-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
`;

const Title = styled.div`
  margin: 50px 0 30px 0;
  font-size: 22px;
  font-weight: 500;
`;

const Con = styled.div``;

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();
        const { results: top } = await topRated();
        const { results: up } = await upComing();

        setNowData(now);
        setPopData(pop);
        setTopData(top);
        setUpData(up);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(popData);
  console.log(topData);
  console.log(upData);

  const params = {
    spaceBetween: 10,
    slidesPerView: 3.5,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: 5.5,
      },
      640: {
        spaceBetween: 15,
        slidesPerView: 4.5,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 3.3,
      },
    },
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && (
            <div>
              <MainBanner $coverImg={nowData[0]?.backdrop_path}>
                <TitleWrap>
                  <h3>{nowData[0]?.title}</h3>
                  <p>{nowData[0]?.overview.slice(0, 100) + "..."}</p>
                </TitleWrap>
              </MainBanner>

              <Container>
                <Title>현재 상영중</Title>

                <Swiper {...params}>
                  {nowData.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <Con>
                        <Link to={`/detail/${movie.id}`}>
                          <img
                            src={W500_URL + movie.poster_path}
                            alt={movie.Title}
                          />
                        </Link>
                      </Con>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Container>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

// useEffect(() => {
//   const movie = async () => {
//     const now = await nowPlaying();
//   };
//   movie();
// }, []);

//? 예외처리:
// try {

// } catch (error) {

// }
