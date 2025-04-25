import styled from "styled-components";

export const FormSearch = styled.form`
  width: 503px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  background-color: white;
  input[type="text"] {
    width: 445px;
    height: 90%;
    padding-left: 16px;
    font-size: 20px;
    border: none;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  input[type="text"]::placeholder {
    color: black;
  }
  input[type="text"]:focus {
    outline: none;
  }
`;

export const ButtonSubimt = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #005cff;
  border: none;
  color: white;
  cursor: pointer;
  .btnIcon {
    width: 25px;
    height: 25px;
  }
`;
