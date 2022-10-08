import useUser from '../data/context/useUser'

const DivisasPage = () => {
	const { username, isLogged } = useUser()

	console.log(username)
	console.log(isLogged())

	return <div>DivisasPage</div>
}

export default DivisasPage
