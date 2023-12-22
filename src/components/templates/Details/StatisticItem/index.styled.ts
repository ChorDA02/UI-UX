import styled from 'styled-components';

export const StatisticItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    color: ${props => props.theme.accentColor1};
    font-size: ${props => props.theme.textSizeTitle};
`;

export const Text = styled.span`
    color: black;
    font-size: ${props => props.theme.textSizeTextM};
`;