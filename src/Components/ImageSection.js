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
                <h4><span>Rishabh Garg</span></h4>
                <p className="paragraph">
                Final year undergraduate student at BITS Pilani.
                SDE Intern @ ServiceNow, Swiggy, Ethan.ai, Fleek | SRE Intern @ Flipkart |
                Cybersecurity Trainee @ Cisco | Data Science Intern @ IIT Delhi |
                National Awardee | Author - Wiley Publications, US | Journal Referee - IEEE
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Primary skill</p>
                    </div>
                    <div className="info">
                        <p>: Rishabh Garg</p>
                        <p>: 21</p>
                        <p>: Indian </p>
                        <p>: English, Hindi </p>
                        <p>: Bhopal, M.P.</p>
                        <p>: Software Development</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1EJ0u78msUU1JcqtpWqww14EaD6e1psG_/view?usp=share_link" target="_blank">
                    <PrimaryButton title={'VIEW RESUME'} />
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
