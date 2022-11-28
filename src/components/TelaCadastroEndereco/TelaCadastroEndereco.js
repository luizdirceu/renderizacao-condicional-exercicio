import { Form, FormContainer, Input, StyledLabel, SendButton, } from "./styled";

function TelaCadastroEndereço(props) {
  return (
    <FormContainer>
      <Form>
        <StyledLabel htmlFor="endereço">
          Endereço:
          <Input id="endereço" />
        </StyledLabel>
        <StyledLabel htmlFor="residencia">
          Numero da Residência:
          <Input id="residencia" />
        </StyledLabel>
        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" />
        </StyledLabel>
        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
        {/* <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton> */}
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereço;