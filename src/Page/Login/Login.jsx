import Input from '../../Component/Input/Input.jsx'
import Button from '../../Component/Button/Button.jsx'
import { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <LoginContainer>
      <div>
        <Input value={email} name="email"
          onChange={handleChange} placeholder={"이메일"} />
        <Input value={password} name="password" type="password"
          onChange={handleChange} placeholder={"비밀번호"} />
        <Button name="button" type="button" >로그인</Button>
      </div>
    </LoginContainer>
  );
}

export default Login;
