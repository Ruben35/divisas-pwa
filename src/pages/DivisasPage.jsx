import useUser from '../data/context/useUser'

const DivisasPage = () => {
	const { username, isLogged } = useUser()

	console.log(username)
	console.log(isLogged())

	return <div></div>
}

export default DivisasPage
