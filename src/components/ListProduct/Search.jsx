import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import SearchIMG from "../../assets/Svg/Search.svg";
import SortIMG from "../../assets/Svg/Sorting-Arrows.svg";
import FilterIMG from "../../assets/Svg/Filter.svg";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
  width: 80%;
  
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0 20px;
  input {
    font-size: 20px;
    color: black;
    border: none;
    outline: none;
  }
  svg {
    right: 0;
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 100%;
  height: 50px;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
  }
`;
const Sort = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  background-color: black;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid black;
  transition: all 0.3s ease-in-out;
  svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
  &:hover {
    border: 2px solid black;
    background-color: white;
    color: black;
  }
`;
const Filter = styled.div`
  display: flex;
  background-color: black;
  width: 20%;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  svg {
    width: 25px;
    height: 25px;
  }
  &:hover {
    border: 2px solid black;
    background-color: white;
    color: black;
  }
`;
const Search = () => {
  return (
    <SearchContainer>
      <SearchBox>
        <input type="text" placeholder="Search Box" />
        <ReactSVG src={SearchIMG} />
      </SearchBox>
      <Category>
        <span>New</span>
      </Category>
      <Category>
        <span>Happy NY</span>
      </Category>
      <Category>
        <span>Mistake</span>
      </Category>
      <Sort>
        <span>Sort</span>
        <ReactSVG src={SortIMG} />
      </Sort>
      <Filter>
        <ReactSVG src={FilterIMG} />
      </Filter>
    </SearchContainer>
  );
};

export default Search;
