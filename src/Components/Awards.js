import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import AwardsCard from '../Components/AwardsCard';

function Awards() {
    return (
        <AwardsSectionStyled>
            <Title title={'Awards'} span={'awards'} />
            <div className="awards">
                <AwardsCard  
                    title={'National Award'} 
                    paragraph={'National Child Award for Exceptional Achivement in Innovation'}
                />
                <div className="mid-card">
                    <AwardsCard 
                        title={'National Award'} 
                        paragraph={'CSIR Innovation Award'}
                    />
                </div>
            </div>
        </AwardsSectionStyled>
           
    )
}

const AwardsSectionStyled = styled.section`
    .awards{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: c<a href = "https://github.com">
       
    }
`;

export default Awards;
