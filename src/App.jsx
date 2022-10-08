import { Route, Routes } from 'react-router-dom'
import MainAppLayout from './layouts/MainAppLayout'
import DivisasPage from './pages/DivisasPage'
import NearMePage from './pages/NearMePage'
import WalletPage from './pages/WalletPage'

function App() {
	return (
		<Routes>
			<Route element={<MainAppLayout />}>
				<Route path='/' element={<DivisasPage />} />
				<Route path='/nearMe' element={<NearMePage />} />
				<Route path='/wallet' element={<WalletPage />} />
			</Route>
		</Routes>
	)
}

export default App
