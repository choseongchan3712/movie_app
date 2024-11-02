import styled from "styled-components";
import { ORIGINAL_URL } from "../../../constant/imgUrl";
import { mainStyle } from "../../../GlobalStyled";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

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

const Banner = ({ data }) => {
  const [random, setRandom] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const num = Math.floor((Math.random() * 18) + 1);

  useEffect(() => {
    try {
      setRandom(num);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(random);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MainBanner $coverImg={data[random]?.backdrop_path}>
          <TitleWrap>
            <h3>{data[random]?.title}</h3>
            <p>{data[random]?.overview.slice(0, 100) + "..."}</p>
          </TitleWrap>
        </MainBanner>
      )}
    </>
  );
};

export default Banner;
