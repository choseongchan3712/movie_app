// import { useEffect, useState } from "react";
// import { nowPlaying } from "../../../api";
// import styled from "styled-components";
// import { mainStyle } from "../../../GlobalStyled";
// import { ORIGINAL_URL } from "../../../constant/imgUrl";

// const MainBanner = styled.section`
//   height: 80vh;
//   background: url(${ORIGINAL_URL}${(props) => props.$coverImg}) no-repeat center /
//     cover;
//   padding: 0 ${mainStyle.moPadding};
//   position: relative;
//   color: #fff;
//   @media screen and (min-width: 450px) {
//     padding: 0 ${mainStyle.pcPadding};
//   }
// `;

// const TitleWrap = styled.div`
//   width: 100%;
//   position: absolute;
//   bottom: 150px;
//   left: 0;
//   padding: 0 ${mainStyle.moPadding};
//   h3 {
//     font-size: 35px;
//     font-weight: 700;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 14px;
//     line-height: 20px;
//     opacity: 0.7;
//   }

//   @media screen and (min-width: 450px) {
//     padding: 0 ${mainStyle.pcPadding};
//     width: 60%;

//     h3 {
//       font-size: 50px;
//     }

//     p {
//       font-size: 18px;
//       line-height: 30px;
//     }
//   }
// `;

// const Banner = () => {
//   const [nowData, setNowData] = useState();
//   useEffect(() => {
//     (async () => {
//       try {
//         const { results: now } = await nowPlaying();


//         setNowData(now);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);
//   return (
//     <MainBanner $coverImg={nowData[0]?.backdrop_path}>
//       <TitleWrap>
//         <h3>{nowData[0]?.title}</h3>
//         <p>{nowData[0]?.overview.slice(0, 100) + "..."}</p>
//       </TitleWrap>
//     </MainBanner>
//   );
// };

// export default Banner;
