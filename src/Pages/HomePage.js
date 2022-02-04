import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Rishabh Garg</span></h1>
                <p>
                Engineering 3rd year student at BITS-Pilani, Goa, specialized in Deep Learning 
                (Neural Networks), Applied Data Science with Python, TensorFlow and Blockchain Technology. 
                Skilled in CSS, HTML and JavaScript Libraries, looking to leverage in-depth 
                knowledge of Full Stack Web Development for achieving breakthrough efficiency and 
                driving client satisfaction.
                </p>
                <div className="icons">
                    <a href="https://linkedin.com/in/rishabhgargbits/" className="icon i-linkedin">
                        <LinkedinIcon />
                    </a>
                    <a href="https://github.com/rishabhgargdps" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://facebook.com/rishabh.garg.121772/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
