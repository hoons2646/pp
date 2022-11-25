import styled from 'styled-components';

export const ProductBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 14px;
  line-height: 20px;
`;
export const ProductItemContainer = styled.div`
  display: flex;
  margin: 22px 2px;
  padding: 2px;

  border-radius: 8px;
  font-size: 14px;
  width: 100%;

  &:hover {
    /* background-color: #ff660044; */
    /* background-image: linear-gradient(12deg,#fff 50%,hsla(0,0%,100%,0)); */
    box-shadow: 0 1px 4px 0 rgba(202, 145, 145, 0.24);
    cursor: pointer;
  }
`;
export const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;

  img {
    border-radius: 8px;
  }
`;
export const ProductTitle = styled.div``;
export const ProductDescription = styled.div`
  margin-top: 4px;
`;
export const ProductReply = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  p {
    padding-left: 4px;
  }
`;
export const ProductVote = styled.div`
  width: 60px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid rgb(217, 225, 236);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 4px;
  }
`;