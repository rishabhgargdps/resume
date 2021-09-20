import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'May - Jul 2022'} 
                        title={'SDE Intern'}
                        subTitle={'ServiceNow'}
                        text={'Upcoming intern at ServiceNow. Technology Stack not yet discussed'} 
                    />
                    <ResumeItem 
                        year={'Jun - Aug 2021'} 
                        title={'SDE Intern'}
                        subTitle={'Swiggy'}
                        text={'Worked with Python libraries - Sphinx, pandoc and html2rest for web view and increased search functionality in documents. Worked with bash scripts to automate the process of conversion of documentation from Atlassian account (using web monitors). Deployed the static webpages into AWS S3.'} 
                    />
                    <ResumeItem 
                        year={'Jun - Jul 2021'} 
                        title={'Data Science Intern'}
                        subTitle={'IIT Delhi'}
                        text={'Implemented SVM and linear regression to predict the relationship between the input parameters to the manufacturing machine and the RMS value of the vibration taken from the acceleration sensors. This was then fed into logistic regressor for classification of efficiency. The next step was to connect Real time dashboard, API implementation and deployment using Docker containers.'} 
                    />
                    <ResumeItem 
                        year={'Mar - Jul 2020'} 
                        title={'Web developer'}
                        subTitle={'Mittal Institute Bhopal'}
                        text={'Created a front end web interface for network administrator and end users. Used the twitter bootstrap framework of CSS for enhanced user experience. Used some basic React JS and did basic event handling.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2019 - 2023'} 
                        title={'Bachelor of Engineering (B.E.)'}
                        subTitle={'BITS Pilani'}
                        text={'Major - Electronics and Communication Engineering | Minor - Finance | Current CGPA - 9.29'} 
                    />
                    <ResumeItem 
                        year={'2017 - 2019'} 
                        title={'CBSE XII Board'}
                        subTitle={'DPS Bhopal'}
                        text={'PCM Stream in Class XII | Percentage - 94.4%'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'CBSE X Board'}
                        subTitle={'DPS Bhopal'}
                        text={'CGPA - 10'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
