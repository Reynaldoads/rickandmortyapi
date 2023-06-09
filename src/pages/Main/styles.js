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
    padding: 1rem 0;
    font-size: 1.7rem;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: bold;
    text-align: center;

    .p-box {
        margin-bottom: 1rem;

        .page-number {
            
        }
    }

    .button-box {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        
        
        button {
            padding: 0.5rem 2rem;
            font-weight: bold;

            cursor: pointer;
        }

        button:first-child {
            margin-right: 1rem;
        }
    }

`

export const BackToInit = styled.a`
    font-size: 1rem;
    margin-left: 1rem;
    cursor: pointer;

`

export const Modal = styled.div`
    position: absolute;
    background-color: red;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
`
