import UserAuth from "../services/UserAuth";

const PrivateRoute = ({children}) => (UserAuth.isLoggedIn())? children: null;

export default PrivateRoute