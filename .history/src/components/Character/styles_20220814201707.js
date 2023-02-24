import styled from "styled-components";

export const Container = styled.li`

    color: white;
    padding: 0 3rem 0 0;
    display: flex;
    border-radius: 2rem;
    align-items: center;
    background-color: #3c3e44;
    max-width: 35rem;

        img {
            max-width:18rem;
            margin-right: 1rem;
        }

        div {

            p.character-name {
                font-size:2.5rem;
            }

            span {
                display: flex;
                
                p {
                    font-size: 1.6rem;
                }

                p:first-child{
                    margin-right: 0.5rem;
                }
            }

            p.character-status {
                
            }

    }
    
`

export const Status = styled.p `
    position: relative;
    margin-left: 1.8rem;

    &::after{
        position: absolute;
        content: "";
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: red;
        left: -1.5rem;
        top: 0.4rem;

        

    }
`