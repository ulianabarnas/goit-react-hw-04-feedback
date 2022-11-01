import styled from "styled-components";

export const Text = styled.span`
    font-weight: ${p => p.theme.fontWeights.semibold};
    color: ${p => p.theme.colors.white};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes.s};

    :last-child::before {
        width: 10px;
        height: 10px;
    };
`;

export const Value = styled.span`
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.whiteOpasity};
    padding: 0 4px;
    border-radius: 4px;
`;