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
                font-size:1.8rem ;
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

            p.character-name {
                font-size: 3rem;
            }

            p.character-status {
                
            }

    }
    
`