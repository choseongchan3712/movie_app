import { useEffect, useState } from "react";
import { nowPlaying, popular } from "../../api";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();

        setNowData(now);
        setPopData(pop);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  console.log(popData);

  return <div>home</div>;
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
