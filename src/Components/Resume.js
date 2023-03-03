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
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'Jan - Jun 2023'}
                        title={'Site Reliability Engineering Intern'}
                        subTitle={'Flipkart | Bengaluru, Karnataka, India'}
                        text={'Working on AIOps (auto-triaging, auto-remediation, post incident work-flow) and service/infra discovery. Tech stack: Terraform, Google Cloud Platform, Kubernetes, SQL'}
                    />
                    <ResumeItem
                        year={'Oct - Dec 2022'}
                        title={'Software Engineering Intern - Backend'}
                        subTitle={'Fleek Technologies | Bengaluru, Karnataka, India'}
                        text={'Created 1 serializer to display error messages based on request params and records stored in models. Triggered events using moengage attributes on record creation, updation or deletion in models. Added 1 model to store the origin of request using HTTP user-agent header. The request was passed as a parameter to a function created in tasks along with parent model’s primary key. Tech stack: Django (Python), PostgreSQL Tools: Postman, Dbeaver'}
                    />
                    <ResumeItem
                        year={''}
                        title={'Cybersecurity Trainee'}
                        subTitle={'Cisco | (Remote)'}
                        text={'Learnt hacking CXO endpoints with msfvenom, using Wireshark for filtering TCP/IP and Telnet packets, and Open Source Intelligence as a part of 2 CTF contests. Implemented 2 terraform templates for Infrastructure as Code. Tech stack: Docker, Kubernetes, Terraform'}
                    />
                    <ResumeItem
                        year={'May - Jul 2022'} 
                        title={'Software Development Engineering Intern'}
                        subTitle={'ServiceNow | Hyderabad, Telangana, India'}
                        text={'Worked on backend of NOW mobile app (ITSM microservice) to migrate to 11 input form screens from 63 data parameters using Java and ServiceNow scripting. Collaborated with dev team for 3 platform third- party integrations. Impact: Input form screens were provided as out-of-the box feature in NOW mobile app and platform family release.'}
                    />
                    <ResumeItem 
                        year={'Feb - Apr 2022'} 
                        title={'Software Engineering Intern'}
                        subTitle={'Ethan AI | Singapore (Remote)'}
                        text={'Automated information extraction from wealth documents. 73 sample client documents stored in AWS S3 were redirected to React frontend for manual processing wherein creation of bounding boxes was done on React-PDF. Box coordinates were sent to Django (Python) backend which used Python-CV to convert PDF into cropped images and perform text extraction using AWS Textract. Transaction data and metadata were stored on MongoDB. Impact: $1.2 million SGD worth of portfolio documents were sent by HNI clients to be processed by the web app.'}
                    />
                    <ResumeItem
                        year={'Jun - Aug 2021'} 
                        title={'Software Engineering Intern'}
                        subTitle={'Swiggy | Bengaluru, Karnataka, India (Remote)'}
                        text={'Python libraries - Sphinx, pandoc, html2rest were used for web view and increased search functionality in docs. Bash scripts automated the process of conversion of 8 developer documents from Atlassian account using web monitors. Deployed the resulting static documents to AWS S3. Impact: Search time for optional parameters documentation in CI/CD pipeline was reduced considerably.'}
                    />
                    <ResumeItem 
                        year={'Jun - Jul 2021'} 
                        title={'Data Science Intern'}
                        subTitle={'IIT Delhi | Delhi, India (Remote)'}
                        text={'Developed Machine Learning models for reducing latency in machine breakdown analysis and predictive maintenance. Created 4 APIs using Flask (Python). Deployed the final model (Accuracy: 86.8%) to Heroku through Docker containers. Real time dashboard integrated using Streamlit (Python) and CI/CD pipeline set up using GitHub Actions.'}
                    />
                    <ResumeItem 
                        year={'Mar - Jul 2020'} 
                        title={'Web Developer Intern - Frontend'}
                        subTitle={'Mittal Institute | Bhopal, Madhya Pradesh, India'}
                        text={'Created frontend for network administrator and end users. Used twitter bootstrap framework for enhanced user experience. Worked with React for basic event handling.'}
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
                        text={'Major - Electronics and Communication Engineering | Minor - Finance | Current CGPA - 8.88'}
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
