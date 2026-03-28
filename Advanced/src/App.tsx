import Input from "./components/Input";
import Button from "./components/Button";
import CustomButton from "./components/CustomButton";
import Container from "./components/Container";
import CustomInput from "./components/CustomInput";
import { useRef } from "react";
import Form from "./components/Form";

function App() {
  const customInput = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { formName: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Input id="name" label="name" type="text" />

      <Input id="age" label="age" type="number" />

      <p>
        <Button el="button">Default Button</Button>
      </p>

      <p>
        <Button el="anchor" href="https://www.google.com" target="_blank">
          Default Anchor
        </Button>
      </p>

      <p>
        <CustomButton>Custom Button</CustomButton>
      </p>
      <p>
        <CustomButton href="https://www.google.com" target="_blank">
          Custom Anchor
        </CustomButton>
      </p>

      <Container as={Button} el="anchor">
        Click me!
      </Container>

      <CustomInput label="Test" id="test" ref={customInput} />

      <Form onSave={handleSave}>
        <Input id="formName" label="Form name" type="text" />

        <Input id="formAge" label="Form age" type="number" />

        <p>
          <Button el="button">Form Button</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
