import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { InputConfig } from "./App";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  selectForm,
  updateInputError,
  updateInputValue,
} from "./redux/slices/formSlice";

interface DynamicFormProps {
  inputConfigs: InputConfig[];
}

const DynamicForm = ({ inputConfigs }: DynamicFormProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(selectForm);

  const handleInputChange = (input: InputConfig, value: any) => {
    dispatch(updateInputValue({ name: input.id, value }));
    if (input.validate) {
      const error = input.validate(value);
      if (error) dispatch(updateInputError({ name: input.id, error }));
      else dispatch(updateInputError({ name: input.id, error: "" }));
    }
  };

  return (
    <form>
      {inputConfigs.map((input, index) => {
        switch (input.type) {
          case "text":
          case "number":
          case "password":
            return (
              <TextField
                key={input.id}
                label={input.label}
                type={input.type}
                value={formData[input.id]?.value}
                onChange={(e) => handleInputChange(input, e.target.value)}
                fullWidth
                error={!!formData[input.id]?.error}
                helperText={formData[input.id]?.error}
              />
            );
          case "select":
            return (
              <FormControl key={input.id} fullWidth>
                <InputLabel>{input.label}</InputLabel>
                <Select
                  value={formData[input.id]?.value}
                  onChange={(e) => handleInputChange(input, e.target.value)}
                >
                  {input.options?.map((option, idx) => (
                    <MenuItem key={idx} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          default:
            return null;
        }
      })}
    </form>
  );
};

export default DynamicForm;
