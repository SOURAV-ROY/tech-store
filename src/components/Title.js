import React from 'react';
import styled from "styled-components";

const Title = ({title, center}) => {
    return (
        <div>
            <TitleWrapper className='row' center={center}>
                <div className='col'>
                    <h2 className='text-title'>{title}</h2>
                    <div className='title-underline'></div>
                </div>
            </TitleWrapper>
        </div>
    );
};

const TitleWrapper = styled.div`
text-align: ${props => props.center ? 'center' : 'left'};
.title-underline{
height: 0.25rem;
width: 12rem;
background: var(--mainGreen);
margin: ${props => props.center ? '0 auto' : '0'};
}

`;

export default Title;
