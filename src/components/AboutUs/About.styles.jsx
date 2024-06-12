import styled from 'styled-components';

export const AboutContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 2000px;
    background-color: #fff;
`;

export const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    
    `;

export const AboutText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    
    .white {
        position: fixed;
        color: white;
        display: none;
        background-color: transparent;
        mix-blend-mode: exclusion;
        font-size: 70px;
        font-weight: 900;
        font-family: 'Poppins', sans-serif;
        z-index: 2;
        top: 137px;
        animation: textTranslateDown linear forwards;
        animation-timeline: scroll(root);
        @keyframes textTranslateDown {
            from {
                transform: translateY(0);
                
            }
            to {
                transform: translateY(230px);
                
            }
        }
    }
    .black {
        position: fixed;
        
        background-color: transparent;
        color: white;
        mix-blend-mode: difference;
        font-size: 70px;
        top: 137px;
        font-weight: 900;
        font-family: 'Poppins', sans-serif;
        z-index: 1;
        background-clip: text;
        animation: textTranslateDown linear forwards;
        animation-timeline: scroll(root);
        @keyframes textTranslateDown {
            from {
                transform: translateY(0);
                
            }
            to {
                transform: translateY(230px);
                
            }
        }
        
    }
`;

export const AboutImage = styled.img`
    
    bottom: 0;
    position: fixed;
    animation: imgScaleUp;
    animation-timeline: scroll(root block);
    background-color: black;
    @keyframes imgScaleUp {
        from {
            width: 50%;
            height: 45%;
        }
        to {
            width: 100%;
            height: 74%;
        }
    }
`;