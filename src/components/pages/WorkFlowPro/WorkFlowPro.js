import styled from 'styled-components';
import BodyFlow1 from '../../BodyFlowPro/BodyFlow1';
import PathViewer1 from '../../PathViewer/PathViewer1';

const WorkFlowPro1 = () => {
 

  return (
    <>
      
      <PathViewer1 />
      <BodyFlow1 />
     
     
    </>
  );
};

export default WorkFlowPro1;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 90%;
  max-width: 500px;
  border: 2px solid #dbe2ff;
  border-radius: 20px;
  margin: 80px auto;
  backgroundColor: blue;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 10px;
    margin: 50px auto;
  }
`;



const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;
