import * as admin from "firebase-admin";
import handleAddUnregisteredUser from "./handleAddUnregisteredUser";
import handleDeleteUnregisteredUser from "./handleDeleteUnregisteredUser";
import handleAddRegister from "./handleAddRegister";

admin.initializeApp();

export {
  handleAddUnregisteredUser,
  handleDeleteUnregisteredUser,
  handleAddRegister,
};
