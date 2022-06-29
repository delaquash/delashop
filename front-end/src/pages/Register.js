import { Container, Wrapper, Title, Form, Input, Agreement, Button } from '../styles/pages/Register';

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title> Register </Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating an account, I solely agree to the processing of my personal data in accordance with <b>Privacy Policy.</b>
                </Agreement>
                <Button>CREATE ACCOUNT</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register