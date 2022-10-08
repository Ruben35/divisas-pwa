import React, { Children, useState } from 'react'
import { GlobalUserContext } from './GlobalUserContext'
import PropTypes from 'prop-types'

const UserContextProvider = ({ children }) => {
	const [username, setUsername] = useState(null)
	const [wallet, setWallet] = useState(null)

	const login = (username) => {
		setUsername(username)
	}

	const logout = () => {
		setUsername(null)
	}

	return (
		<GlobalUserContext.Provider value={{ username, wallet, login }}>
			{children}
		</GlobalUserContext.Provider>
	)
}

GlobalUserContext.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
}

export default UserContextProvider
