import styled from "styled-components";

export const Title = styled.h2`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.primary};
    margin-bottom: ${p => p.theme.space[4]}px;
    text-transform: uppercase;
`
export const Wrapper = styled.div`
    padding: ${p => p.theme.space[5]}px;

    :last-child {
        background-color: ${p => p.theme.colors.primary};
    }

    :last-child h2 {
        color: ${p => p.theme.colors.white};
    }
`