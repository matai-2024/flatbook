import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserAuthIDForID from '../hooks/useUserAuthIDForID'

export default function RedirectToDashboardIfLoggedIn({
  children,
  relocationPath,
}: {
  children: JSX.Element
  relocationPath: string
}) {
  const { data: user, isLoading } = useUserAuthIDForID()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && user[0] !== undefined) {
        // user has already signed up
        navigate(relocationPath)
      }
  }, [user, navigate, relocationPath])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return children
}
