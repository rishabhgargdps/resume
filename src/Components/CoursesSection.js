import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function CoursesSection() {
    return (
        <InnerLayout>
            <CoursesSectionStyled>
                <Title title={'Specializations'} span={'specializations'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Development'} 
                        paragraph={'Experience with React, Vue, Angular, Node, Express, Axios, Authentication'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Machine Learning'} 
                            paragraph={'Experience in CNN, RNN, SVR, Decision trees and Unsupervised algorithms'}
                        />
                    </div>
                    <ServiceCard
                        image={gamedev} 
                        title={'Quantitative Finance'} 
                        paragraph={'Experience with Python and Pine script for testing Financial strategies.'}
                    />
                    <ServiceCard
                        image={design} 
                        title={'Blockchain Development'} 
                        paragraph={'Experience with decentralized applications and smart contracts using Solidity'}
                    />
                </div>
            </CoursesSectionStyled>
        </InnerLayout>
    )
}

const CoursesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: c<a href = "https://github.com">
       
    }
`;

export default CoursesSection;
