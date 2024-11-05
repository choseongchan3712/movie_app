import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { ORIGINAL_URL } from "../../constant/imgUrl";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";
import Wrapper from "../../components/Wrapper";
import useScrollTop from "../../lib/useScrollTop";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 45%;
  height: 800px;
  /* background: url(${ORIGINAL_URL}${(props) =>
    props.$coverImg}) no-repeat center /
    cover; */
`;
const TitleWrap = styled.div`
  width: 50%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
  }

  ul {
    list-style: disc;
    margin: 15px 0px 10px 20px;
    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-top: 50px;
    opacity: 0.7;
    letter-spacing: 0;
  }
`;

const Detail = () => {
  const { id } = useParams();

  const [detail, setdetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setdetail(detailData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  // console.log(detail);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={detail?.title} />
          <Wrapper>
            <Container>
              {/* <Bg $coverImg={detail.poster_path} /> */}
              <Bg
                style={{
                  background: `url(${ORIGINAL_URL}${detail.poster_path}) no-repeat center / cover `,
                }}
              />
              <TitleWrap>
                <h3>{detail?.title}</h3>
                <span>{Math.round(detail?.vote_average)}점</span> •{" "}
                <span>{detail?.runtime}분</span> •{" "}
                <span>{detail?.release_date}</span>
                <ul>
                  {detail?.genres?.map((data, index) => (
                    <li key={index}>{data.name}</li>
                  ))}
                </ul>
                <p>{detail?.overview}</p>
              </TitleWrap>
            </Container>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Detail;
