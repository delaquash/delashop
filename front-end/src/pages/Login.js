// import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Visibility } from '@material-ui/icons';
import { Container, Wrapper, Title, Form, Input, Button, Link, I} from '../styles/pages/Login';

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password"
                    type={passwordShown ? "text" : "password"}
                />
                <I onClick={togglePasswordVisiblity}><Visibility/></I>
                <Button>SIGN IN</Button>
                <Link>Forgot Password</Link>
                <Link>Sign Up</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login