import styled from '@emotion/styled';
import { MEDIA_QUERIES } from '@constants/styles';

export const SubHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 67px;
  padding: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`;

export const SubHeaderContent = styled.div`
  position: relative;
  display: flex;
  max-width: 1200px;
  height: 100%;
  margin: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 25px;
  font-size: 1.25rem;
  margin: 0;
`;
