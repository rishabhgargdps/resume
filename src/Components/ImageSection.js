import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Rishabh Garg</span></h4>
                <p className="paragraph">
                Student at BITS - Pilani, Goa | an upcoming SDE Intern with ServiceNow, California US | 
                Journal Referee with IEEE Internet of Things | Worked as Data Science Intern at IIT - Delhi | 
                SDE Intern with Swiggy, India. Authored 2 Books and accomplished 4 Major Projects in Web D; 
                4 in Machine Learning; 2 on Blockchain and 2 in Financial Management.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Rishabh Garg</p>
                        <p>: 20</p>
                        <p>: Indian </p>
                        <p>: English, Hindi </p>
                        <p>: Bhopal, Madhya Pradesh</p>
                        <p>: Competitive coder</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1mtFJilH4JDeG3e_OiFsZPJoj8_FMkdxJ/view?usp=sharing">
                    <PrimaryButton title={'Download CV'} />
                </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
