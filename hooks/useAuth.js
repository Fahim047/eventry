const { AuthContext } = require('@/contexts');
const { useContext } = require('react');

const useAuth = () => {
	const { auth, setAuth } = useContext(AuthContext);
	return { auth, setAuth };
};

export default useAuth;
