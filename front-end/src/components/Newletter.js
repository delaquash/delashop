import { Send } from "@material-ui/icons"
import { Container, Title, Description, InputContainer, Input, Button } from "../styles/Newletter";


const Newletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from your favourite product.</Description>
        <InputContainer>
            <Input placeholder="Kindly input your email" />
                <Button>
                    <Send />
                </Button>
        </InputContainer>
    </Container>
  )
}

export default Newletter