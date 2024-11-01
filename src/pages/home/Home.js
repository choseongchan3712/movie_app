import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { ORIGINAL_URL } from "../../constant/imgUrl";

const MainBanner = styled.section`
  height: 80vh;
  background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
    cover;
  padding: 0 ${mainStyle.moPadding};
  position: relative;
  color: #fff;
  @media screen and (min-width: 450px){
    padding: 0 ${mainStyle.pcPadding};
  }
`;

const TitleWrap = styled.div`
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
`;

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(popData);
  console.log(topData);
  console.log(upData);

  return (
    <div>
      <MainBanner $coverImg={nowData[0]?.backdrop_path}>
        <TitleWrap>
          <h3>{nowData[0]?.title}</h3>
          <p>{nowData[0]?.overview.slice(0, 100) + "..."}</p>
        </TitleWrap>
      </MainBanner>
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
