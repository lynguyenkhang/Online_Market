import { addPhoneNumber, changeAvatar, changeDisplayName, changePhoneNumber, fetchAuthStateObserver, addJoinDate } from "../AuthSlice";
import addPhoneNumberFirebase from './addPhoneNumberFirebase';
import addJoinDateFirebase from './addJoinDateFirebase';

import changeNameFirebase from "./changeNameFirebase";
import changePhoneNumberFirebase from "./changePhoneNumberFirebase";
import TriggerAuthObserver from './TriggerAuthObserver';
import uploadAvatar from "./uploadAvatar";

const AuthMiddleware = store => next => action => {

    switch (action.type) {
        case fetchAuthStateObserver.type: TriggerAuthObserver(store, next, action, process.env.REACT_APP_ADMIN); break;
        case addPhoneNumber.type: addPhoneNumberFirebase(store, next, action); break;
        case changeAvatar.type: uploadAvatar(store, next, action); break;
        case changeDisplayName.type: changeNameFirebase(store, next, action); break;
        case changePhoneNumber.type: changePhoneNumberFirebase(store, next, action); break;
        case addJoinDate.type: addJoinDateFirebase(store, next, action); break;
        default: next(action) 
    }
}

export default AuthMiddleware

