import styled from "styled-components";


export const Container = styled.main`

/* aside {
    li {
        button {
            padding: 1rem;
            border-radius: 4px;
            width: 100px;
            border: none;
            margin-right: 0.5rem;

            &:hover {
            background-color: lightblue;
            cursor: pointer;
            transition: .3s;
            color: white;
            font-weight: bold;
            }
        }
    }
} */

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: #202329;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 2rem;

    }
    p {
        color: white;
    }
`

export const PagesContainer = styled.div`
padding: 1.5rem 0;
    h1 {
        font-size: 2rem;
        color: white;
    }

`
