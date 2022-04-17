import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 12px;
  }

  h1 {
    font-size: 18px;

    margin-bottom: 26px;

    color: #4F4F4F;
  }

  div {
    width: 100%;
    height: 224px;

    margin-bottom: 26px;

    border-radius: 12px;

    background-size: 100% 100%;
  }
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 8px;

  width: 100%;
  height: 34px !important;
  padding: 2px;

  border-radius: 8px !important;
  border: 1px solid #E0E0E0;

  background-color: #F6F8FB;

  input {
    font-size: 8px;

    width: 100%;
    margin-left: 7px;

    border: none;

    color: #4F4F4F;
  }

  button {
    font-size: 8px;

    width: 74px;
    height: 100%;
    margin-left: 4px;

    border-radius: 8px;
    border: none;

    background-color: #2F80ED;
    color: #FFF;

    cursor: pointer;
  }
`;