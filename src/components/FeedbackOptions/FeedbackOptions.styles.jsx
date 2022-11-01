import styled from "styled-components";

export const Button = styled.button`
    display: block;
    width: 120px;
    margin: 0 auto;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    text-transform: capitalize;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.white};
    transition: all 100ms linear;
    background-color: ${({ children, theme }) => {
        switch (children) {
            case "good":
                return theme.colors.good;
            case "neutral":
                return theme.colors.neutral;
            case "bad":
                return theme.colors.bad;
            default:
                return theme.colors.muted;
        }
    }};
    box-shadow: ${({ children }) => {
        switch (children) {
            case "good":
                return '0px 4px 0px 0px #218324';
            case "neutral":
                return '0px 4px 0px 0px #ada818';
            case "bad":
                return '0px 4px 0px 0px #c4561f';
            default:
                return '0px 4px 0px 0px #000000';
        }
    }};
    
    :not(:last-child) {
        margin-bottom: ${p => p.theme.space[3]}px;
    };
    
    :hover,
    :focus {
        background-color: ${({ children, theme }) => {
            switch (children) {
            case "good":
                return theme.colors.goodHover;
            case "neutral":
                return theme.colors.neutralHover;
            case "bad":
                return theme.colors.badHover;
            default:
                return theme.colors.muted;
            }
        }};
    };

    :active {
        box-shadow: 0px 0px 1px 1px #cbcbcb;
        transform: translateY(4px);
    };

    @media screen and (min-width: 440px) {
        display: inline-block;
        width: 80px;

        :not(:last-child) {
            margin-right: ${p => p.theme.space[4]}px;
            margin-bottom: 0px;
        }
    };
`