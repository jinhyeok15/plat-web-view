'use client'

import TextInput from '@plat-ui/TextField/TextInput'

export interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode | string
}

const TextField = ({ label, ...inputProps }: TextFieldProps) => {
  return (
    <div>
      {label ? (
        <label>
          {typeof label === 'string' ? (
            <div className="text-sm font-medium mb-2 text-gray-900">
              {label}
            </div>
          ) : (
            label
          )}
          <TextInput {...inputProps} />
        </label>
      ) : (
        <TextInput {...inputProps} />
      )}
    </div>
  )
}

export default TextField
