import styled from "styled-components";

interface Props {
    alive: string,
}
export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.5s;
    overflow: auto;
    transition: all 0.3s linear;
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    .modal-content {
        position: relative;
        background-color: red;

        img {
            border-radius:0;
        }
        
        svg {
            position: absolute;
            right: 15px;
            top: 5px;
            width: 25px;
            height: 25px;
            cursor: pointer;
        }
    }
`
export const Container = styled.li`

    color: white;
    padding: 0 3rem 0 0;
    display: flex;
    border-radius: 2rem;
    align-items: center;
    background-color: #3c3e44;
    width: 40rem;
    max-width: 40rem;
    margin-right:2rem;
    margin-bottom: 2rem;

        img {
            max-width:18rem;
            margin-right: 1rem;
            border-radius: 2rem 0 0 2rem;
        }

        .character-content {

            margin-left: 1.6rem;

            .default-box {
                a {
                    border-radius: 4px;
                }                
            }
            
            p.character-name {
                font-size:2.5rem;
                font-weight: light;
                margin-bottom: 0.5rem;
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

            p.title {
              font-size: 1.8rem;
              margin-bottom: 0.2rem;
              color: #949394;
                font-weight: bold;
              .status {
                font-weight: 300;
                display: inline;
                color: #fff;
                font-size: 1.6rem;
              }
            }

            p.species { 
              font-size: 1.6rem;
              margin-bottom: 1rem;
              color: #949394;
            }

            button {
                font-size: 1.5rem;
                padding: 0.5rem 2rem;
                background-color: #949394;
                color: #fff;
                font-weight: bold;
                transition: 0.2s;
                border: none;

                &:hover {
                    background-color: #fff;
                    color: #000;
                    transition: 0.2s;
                }
            }
        }

        form {
            button {
                background-color: transparent;
                padding: 0.5rem;
                transition: 0.3s;
                cursor: pointer;
                font-weight: bold;
                color: #fff;
                border-color: #fff;

                &:hover {
                    border-color: gold;
                    transition: 0.3s;
                }
            }
        }
    `
const handleColor = (color:string) => {
    switch(color){
        case "Alive":
            return "green";
        case "Dead":
            return "red"
        case "unknown":
            return "purple"
    }
}
export const Status = styled.p<Props> `
    position: relative;
    margin-left: 1.6rem;

    &::after{
        position: absolute;
        content: "";
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color:${props => handleColor(props.alive)};
        left: -1.5rem;
        top: 0.4rem;
    }
`