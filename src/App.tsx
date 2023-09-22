import { Card, CardContent } from "@mui/material";
import DynamicForm from "./DynamicForm";
import { useAppSelector } from "./redux/hooks";
import { selectForm } from "./redux/slices/formSlice";
import "./styles.css";

export interface InputConfig {
  id: string;
  type: "text" | "select" | "number" | "password";
  label: string;
  options?: string[];
  required?: boolean;
  validate?: (value: any) => string | undefined;
}

const inputConfigs: InputConfig[] = [
  {
    id: "firstName",
    type: "text",
    label: "First Name",
    required: true,
    validate: (value) => {
      if (value.match(/[^A-Za-z\s]/)) {
        return "First name cannot contain numbers or special characters.";
      }
    },
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    id: "age",
    type: "number",
    label: "Age",
  },
  {
    id: "selectSomething",
    type: "select",
    label: "Select Something",
    options: ["Option 1", "Option 2", "Option 3"],
  },
];

export default function App() {
  const formData = useAppSelector(selectForm);
  return (
    <div className="App">
      <div>
        <Card>
          <CardContent>
            <DynamicForm inputConfigs={inputConfigs} />
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
