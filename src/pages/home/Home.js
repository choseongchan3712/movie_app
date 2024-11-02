import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import Loading from "../../components/Loading";
import "swiper/css";
import Banner from "./components/Banner";
import Contents from "./components/Contents";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const randomDataArr = [nowData, popData, topData, upData];
  const [random, setRandom] = useState();
  const num = Math.floor((Math.random() * 3) + 1);

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
        setRandom(num);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(random);

  // console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && popData && topData && upData && <Banner data={randomDataArr[random]} />}
          {nowData && <Contents data={nowData} title="현재 상영중" />}
          {popData && (
            <div>
              <Contents data={popData} title="현재 인기작품" />
            </div>
          )}
          {topData && (
            <div>
              <Contents data={topData} title="역대 인기작품" />
            </div>
          )}
          {upData && (
            <div>
              <Contents data={upData} title="신작" />
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
