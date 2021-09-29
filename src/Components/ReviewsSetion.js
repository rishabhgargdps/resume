import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Recommendations'} span={'Recommend'} />
            <InnerLayout>
                <div className="reviews">
                    <a href = "">
                        <ReviewItem 
                            text={'Professional LORs'} 
                        />
                    </a>
                    <a href = "">
                        <ReviewItem
                            text={'Educational LORs'}
                        />
                    </a>
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
