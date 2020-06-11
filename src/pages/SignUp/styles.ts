import styled, { css } from 'styled-components';
import { shade } from 'polished';
import media from 'styled-media-query';

import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: stretch;

  ${media.lessThan('medium')`
    padding: 50px 0;
  `}
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  ${media.lessThan('medium')`
      max-width: unset;
   `}

  h1 {
    margin-bottom: 24px;
  }

  form {
    margin: 80px 0;
    width: 50%;
    text-align: center;

    ${media.lessThan('medium')`
      width: 90%;
    `}

    a {
      color: ${({ theme }) => theme.colors.whiteSecondary};
      display: block;
      margin-top: 24px;
      transition: color 200ms;

      &:hover {
        ${({ theme }) => css`
          color: ${shade(0.1, theme.colors.whiteSecondary)};
        `}
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.orange};
    transition: color 200ms;

    svg {
      margin-right: 16px;
    }

    &:hover {
      ${({ theme }) => css`
        color: ${shade(0.1, theme.colors.orange)};
      `}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.darkPrimary};
  background-image: url(${signUpBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${media.lessThan('medium')`
    display: none;
  `}
`;
