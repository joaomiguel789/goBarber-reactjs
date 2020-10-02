import styled from 'styled-components';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    place-content: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 40px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }
    }

    > a {
        color: #ff9000;
        display: block;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;
        

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signUpBackgroundImg}) no-repeat center; 
    background-size: cover;
`;