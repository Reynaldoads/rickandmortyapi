import styled from "styled-components";

export const Li = styled.li `
    width: 30rem;
    padding: 1.5rem;
    background-color: #3c3e44;
    border-radius: 0.4rem;
    margin-bottom: 1rem;

    div {
        display: flex;
        margin-bottom: 1rem;
    }

    div.name-box {
        background-color: gray;
    }
    div.dimension-box {
        background-color: green;
    }
    div.type-box {
        background-color: red;
    }
`