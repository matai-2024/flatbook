/* eslint-disable jsx-a11y/alt-text */
import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputAttribues = InputHTMLAttributes<HTMLImageElement>

//** To Call: <AvatarIcon src='URL TO IMAGE' alt='Avatar Icon' */
// placeholder image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"

// Extra customisation: https://daisyui.com/components/avatar/

function AvatarIcon({ className, ...rest }: InputAttribues) {
  return (
    <div className="avatar">
      <div className={twMerge('w-24 rounded', className)}>
        <img {...rest} />
      </div>
    </div>
  )
}

export default AvatarIcon
