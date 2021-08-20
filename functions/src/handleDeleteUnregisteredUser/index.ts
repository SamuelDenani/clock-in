import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const handleDeleteUnregisteredUser =
  functions
    .firestore
    .document("users/{docId}")
    .onDelete((document) => {
      const {email, company} = document.data();

      return admin.auth()
        .deleteUser(document.id)
        .then(() => {
          functions.logger.info(`User with email ${email} was deleted`);

          if (company) {
            const increment = admin.firestore.FieldValue.increment(-1);

            company.update({employees: increment});
          }
        })
        .catch((e) => functions.logger.error("Error trying to delete user", e));
    });

export default handleDeleteUnregisteredUser;
