import { View, Image, TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import styled, { css } from "styled-components";

export const CardStyle = styled(View)`
    ${({ theme }) => css`
        background: ${theme.color.white_300};
        width: 100%;
        height: ${RFValue(200)}px;

        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        border-radius: ${RFValue(12)}px;
        padding: 2%;
        gap: ${RFValue(8)}px;
    `}
`;

export const ImageStyle = styled(Image)`
    width: 43%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
`;

export const ViewContent = styled(View)`
    justify-content: space-between;
    gap: ${RFValue(4)}px; 
    height: 100%;
    flex-grow: 1;
`;

export const ViewTextStyle = styled(View)`
    gap: ${RFValue(8)}px;
    flex-grow: 1;
`;

export const ViewStyle = styled(View)`
    width: 100%;
    flex-direction: row;
    gap: ${RFValue(8)}px;
`;

export const ButtonStyle = styled(TouchableOpacity)`
    ${({ theme }) => css`
        background: ${theme.color.primary_200};
        flex-grow: 1;
        height: ${RFValue(40)}px;
        border-radius: ${RFValue(8)}px;
        align-items: center;
        justify-content: center;
    `}
`;

export const ButtonTextStyle = styled(Text)`
    ${({ theme }) => css`
        font-family: ${theme.font.primary_700};
        color: ${theme.color.white_100};
        font-size: ${RFValue(15)}px;
    `}
`;

export const ButtonIconStyle = styled(TouchableOpacity)`
    ${({ theme }) => css`
        background: ${theme.color.primary_dark};
        border-radius: ${RFValue(8)}px;
        width: ${RFValue(40)}px;
        height: ${RFValue(40)}px;
        justify-content: center;
        align-items: center;
    `}
`;
