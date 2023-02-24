import styled from "styled-components"

export const Container = styled.div`
    input, button {
        border: none;
    }

    input {
        height: 3.6rem;
        outline-style: 0;
    }

    button {
        padding: 1rem;
        font-weight: 600;

        &:hover {
            cursor: pointer;
            filter: brightness(90%);
        }
    }

    .filter-name-container:disabled {
        display: none;
    }
`