import styled from 'styled-components';
import BodyFlow2 from '../../BodyFlowPro/BodyFlow2';
import PathViewer2 from '../../PathViewer/PathViewer2';

const WorkFlowPro2 = () => {
  
    return (
        <>
            
            <PathViewerContainer>
                <PathViewer2 />
            </PathViewerContainer>
            <BodyFlow2 />
        
        </>
    );
}

export default WorkFlowPro2;

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 630px;
    width: 500px;
    border: 2px solid #dbe2ff;
    border-radius: 20px;
    margin: 90px auto;
`;

const PathViewerContainer = styled.div`
    margin-top: -10px;
    margin-bottom: 20px; 
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
