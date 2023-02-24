import styled from "styled-components";



export const Container = styled.header`
    padding: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px #202329;
  
    h1 {
        font-size: 8rem;
        color:#202329 ;
        font-weight: 900;
    }

    nav {
        margin-top: 2rem;

        ul {
            display: flex;
            justify-content: space-between;

            li {
                font-weight: bold;
                font-size: 2.5rem;
                padding: 1rem 1.5rem;
                border-radius: 4px;
                border: 2px solid #202020;
                transition: all .3s;
                cursor: pointer;
                color: #fff;

                &:not(:last-child){
                    margin-right: 2rem;
                }

                &:hover {
                    background-color: #202020;
                    color: #fff;
                    transition: all .3s;
                }
                
                a:visited {
                    color: #202329;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
    }

    img {
        width: 30rem;
        height: 30rem;
    }

`