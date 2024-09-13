import { HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement>

//** To Call: <Button onClick='...'> Button Name <Button/> */

// Alternate styles, in YOUR component when you call, add className='btn-**any-of-the-following**'
// neutral, primary, secondary, accent, ghost, link
// eg.  <Button className='btn-primary'> Primary Button <Button/>

// More button info and styles: https://daisyui.com/components/button/

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={twMerge(' btn btn-secondary', className)} {...rest}>
      {children}
    </button>
  )
}

export default Button
