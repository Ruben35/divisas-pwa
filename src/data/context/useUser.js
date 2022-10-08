import { useContext } from 'react'
import { GlobalUserContext } from './GlobalUserContext'

export default function useUser() {
	const { username, wallet, login, logout } = useContext(GlobalUserContext)

	const isLogged = () => {
		return username !== null
	}

	return { username, wallet, login, logout, isLogged }
}
