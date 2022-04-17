import styled, { css } from 'styled-components';

interface DropContainerProps {
  isDragActive: boolean;
  isDragReject: boolean;
}

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;

    margin-bottom: 16px;
    
    color: #4F4F4F;
  }

  p {
    font-size: 10px;

    margin-bottom: 32px;

    color: #828282;
  }

  span {
    font-size: 12px;

    margin-bottom: 20px;

    color: #BDBDBD;
  }
`;

export const DropContainer = styled.div<DropContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  padding: 32px 0;
  margin-bottom: 20px;
  
  border-radius: 12px;
  border: 1px dashed #97BEF4;
  background-color: #F6F8FB;

  cursor: pointer;

  ${props => props.isDragActive &&  dragActive};
  ${props => props.isDragReject &&  dragReject};

  img {
    margin-bottom: 36px;
  }

  span {
    font-size: 12px;

    margin: 0;

    color: #BDBDBD;
  }
`;

export const Button = styled.div`
  font-size: 12px;

  padding: 8px 16px;

  border-radius: 8px;
  border: none;
  background-color: #2F80ED;
  color: #FFF;

  cursor: pointer;
`;