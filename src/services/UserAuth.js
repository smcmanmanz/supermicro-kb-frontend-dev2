import Keycloak from "keycloak-js";

const kc = new Keycloak('./keycloak.json');

const init = (onAuthenticatedCallback) => {
    kc.init({
        onLoad: 'login-required',
        /*onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/silent-check-sso.html',
            */
    }).then((authenticated)=>{
        if(!authenticated){
            console.warn('user is not authenticated.');
            doLogin();
        }else{
        onAuthenticatedCallback();
        }
    })
    .catch(console.err);
}

const doLogin = kc.login;

const doLogout = kc.logout;

const getToken = () => kc.token;

const isLoggedIn = ()=> !!kc.token;

const updateToken = (successCallback) => {
    kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);
}

const getUsername = ()=> kc.tokenParsed?.preferred_username;

const UserAuth = {
    init,
    doLogin,
    doLogout,
    getToken,
    isLoggedIn,
    updateToken,
    getUsername,
};

export default UserAuth;