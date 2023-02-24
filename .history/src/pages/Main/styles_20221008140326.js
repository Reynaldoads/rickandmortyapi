import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #202329;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
    }
    .click-filter {
        margin: 0 1rem;
        color: white;
        font-weight: bold;
    }
`

export const PagesContainer = styled.div`
    display: flex;
    padding: 1.5rem 0;
    flex-direction: column;

    .p-box {
        margin-bottom: 1rem;
        
        .page-number {


        }
    }

    .button-box {
        margin-bottom: 1rem
    }

    h1 {
        font-size: 2rem;
        color: white;
    }

`
