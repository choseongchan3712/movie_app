import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { searchMoovie } from "../../api";
import { useState } from "react";
import { NO_IMG, W500_URL } from "../../constant/imgUrl";
import PageTitle from "../../components/PageTitle";
// import Loading from "../../components/Loading";

const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    padding: 0 20px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

const ConWrap = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 30px;
`;

const Con = styled.div`
  a {
    color: white;
  }
  h3 {
    margin-top: 10px;
    font-size: 18px;
  }

  height: 415px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [term, setTerm] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  const onSearch = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await searchMoovie(keyword);
      console.log(results);
      setTerm(results);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(term);

  return (
    <>
      <PageTitle title={`search`} />
      <Wrapper>
        <Form onSubmit={handleSubmit(onSearch)}>
          <input
            {...register("search", {
              required: "영화 제목은 필수 입니다.",
            })}
            type="text"
            placeholder="영화 제목"
          />
        </Form>

        {term && (
          <ConWrap>
            {term.map((data, index) => (
              <Con key={index}>
                <Link to={`/detail/${data.id}`}>
                  {/* link 걸어야함 */}
                  <img
                    src={
                      data.poster_path ? W500_URL + data.poster_path : NO_IMG
                    }
                    alt={data.title}
                  />
                  <h3>{data.title}</h3>
                </Link>
              </Con>
            ))}
          </ConWrap>
        )}
      </Wrapper>{" "}
    </>
  );
};

export default Search;
