import { Dispatch, SetStateAction } from 'react'

interface FormInputUI {
  inputId: string;
  inputLabel: string;
  handleInputChange: Dispatch<SetStateAction<string>>;
}

export const FormInput = (props: FormInputUI) => (
  <div className="form-group">
    <label htmlFor={props.inputId} className="small">{props.inputLabel}</label>

    <input
      type="text"
      className="form-control"
      id={props.inputId}
      onChange={(event) => props.handleInputChange(event.currentTarget.value)}
    />
  </div>
)
