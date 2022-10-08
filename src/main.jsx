import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import UserContextProvider from './data/context/UserContextProvider'
import './styles/main.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</BrowserRouter>
	</React.StrictMode>
)
