import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputAttribues = InputHTMLAttributes<HTMLInputElement>

//** To Call: <TextBox placeholder='placeholder text'/> and any other attributes like name, input, onclick etc.. */

// More text box info: https://daisyui.com/components/input/

function TextBox({ className, ...rest }: InputAttribues) {
  return (
    <input
      type="text"
      className={twMerge('input input-bordered w-full max-w-xs', className)}
      autoComplete="off"
      {...rest}
    />
  )
}

export default TextBox
