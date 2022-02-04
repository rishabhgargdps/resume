import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Skills'} span={'skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'C/C++'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'JAVA'}
                            width={'30%'}
                            text={'30%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'55%'}
                            text={'55%'}
                        />
                        <ProgressBar 
                            title={'SOLIDITY'}
                            width={'40%'}
                            text={'40%'}
                        />
                        <ProgressBar 
                            title={'DJANGO'}
                            width={'25%'}
                            text={'25%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ProgressBar 
                            title={'Vue JS'}
                            width={'30%'}
                            text={'30%'}
                        />
                        <ProgressBar 
                            title={'Node JS'}
                            width={'45%'}
                            text={'45%'}
                        />
                        <ProgressBar 
                            title={'Express JS'}
                            width={'45%'}
                            text={'45%'}
                        />
                        <ProgressBar 
                            title={'SQL'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'MongoDB'}
                            width={'45%'}
                            text={'45%'}
                        />
                        <ProgressBar 
                            title={'AWS (S3)'}
                            width={'20%'}
                            text={'20%'}
                        />
                        <ProgressBar 
                            title={'FLASK'}
                            width={'45%'}
                            text={'45%'}
                        />
                        <ProgressBar 
                            title={'MACHINE LEARNING'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'DEEP LEARNING'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'50%'}
                            text={'50%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
