interface FormInputUI {
  inputId: string;
  inputLabel: string;
  inputType: 'str1' | 'str2';
  handleInputChange: (type: 'str1' | 'str2', value: string) => void;
}

export const FormInput = (props: FormInputUI) => (
  <div className="form-group">
    <label htmlFor={props.inputId} className="small">{props.inputLabel}</label>

    <input
      type="text"
      className="form-control"
      id={props.inputId}
      onChange={(event) => props.handleInputChange(props.inputType, event.currentTarget.value)}
    />
  </div>
)
