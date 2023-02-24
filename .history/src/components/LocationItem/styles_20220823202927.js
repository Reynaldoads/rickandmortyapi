import styled from "styled-components";

export const Li = styled.li `
    max-width: 25rem;
    padding: 1.5rem;

    div {
        background-color: #3c3e44;
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