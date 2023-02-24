import styled from "styled-components";

export const Container = styled.li`
    font-size: 1.6rem;
    color: white;
    padding: 0 3rem 0 0;
    display: flex;
    border-radius: 2rem;
    align-items: center;
    background-color: #3c3e44;
    width: 30rem;

        img {
            max-width:18rem;
            margin-right: 1rem;
        }

        div {

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