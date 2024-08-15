import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;

    img {
        max-height: 60px;
        max-width: 60px;
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;

    li {
        color: #848484;

        &:hover{
            cursor: pointer;
            color: #ffffff;
        }
    }
`;