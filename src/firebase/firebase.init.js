import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*steps for authentication
------------------------------

Step-1: initial Setup
1.firebase: create project
2.create web app
3.get configuration
4.initialize firebase
5.Enable Auth Method

------------------------------
Step-2:
1.create Login Component
2.create Register Component
3.create Router for Login and Register

---------------------------------
Step-3:
1.set up sign in method
2.set up sign out method
3.user state
4.special observer
5.return necessary methods and states from firebase

----------------------------------
Step-4:
1.create a Auth Context
2.create context Provider
3.set context Provider context value
3.use Auth Provider
4.create useAuth Hook

Step-5:
1.create Private Route
2.set Private Route



*/