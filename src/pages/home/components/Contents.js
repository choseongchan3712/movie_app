import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { mainStyle } from "../../../GlobalStyled";

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


const Contents = ({data, title}) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Swiper {...params}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Con>
              <Link to={`/detail/${movie.id}`}>
                <img src={W500_URL + movie.poster_path} alt={movie.Title} />
              </Link>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Contents;
