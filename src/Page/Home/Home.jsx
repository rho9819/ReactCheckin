import { useState } from 'react';
import '../Home/Home.css'
import Logout from '../../Component/Logout/Logout.jsx'
import NickName from '../../Component/NickName/Nickname.jsx'
import DateComponent from '../../Component/Date/Date.jsx'
import CommuteBtn from '../../Component/Button/CommuteBtn/Commutebtn.jsx'
import Calender from '../../Component/Date/Calender/Calender';
import Modal from '../../Component/Modal/modal.jsx'
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  height: 80px;
  width: 100vw;
  align-items: center;
  border-bottom: 1px solid #E7E7E7;
`;

const MenuLogout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0px 32px 0px 18px;
`

const MenuLeft = styled.div`
  width: 200px;
  height: 92vh;
  border-right: 1px solid #E7E7E7;
  text-align: center;
`

const CalenderPosition = styled.div`
  width: 100vw;
  position: absolute;
  left: 20%;
  top: 10%;
`

const BtnPosition = styled.div`
  width: 150px;
  margin: 0 auto;
`

function Home() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // 상태를 현재와 반대로 토글
  }

  return (
    <>
      <Menu>
        <MenuLogout>
          <NickName />
          <Logout />
        </MenuLogout>
      </Menu>

      <MenuLeft>
        <DateComponent />
        <BtnPosition>
          <CommuteBtn onClick={toggleModal}>출근</CommuteBtn>
        </BtnPosition>
        {isModalOpen && <Modal />}
      </MenuLeft>

      <CalenderPosition>
        <Calender />
      </CalenderPosition>
    </>
  );
}

export default Home;
