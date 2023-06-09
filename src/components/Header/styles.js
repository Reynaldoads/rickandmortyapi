import styled from "styled-components";

export const Container = styled.header`
    padding: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px #202329;
    position: relative;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

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
                background-color: transparent;

                &:not(:last-child){
                    margin-right: 2rem;
                }
                
                a {
                    color: #202329;
                }

                &:hover {
                    background-color: #202020;
                    transition: all .3s;

                        a {
                            color: #fff;
                        }
                    }
                }

            }
        }

    img {
        width: 25rem;
        height: 25rem;
        position: absolute;
        z-index: -3;
        opacity: 0.3;
    }

`