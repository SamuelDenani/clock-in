import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

import {generate} from "generate-password";

const handleAddUnregisteredUser =
  functions
    .firestore
    .document("users/{docId}")
    .onCreate((document) => {
      const {email, company} = document.data();

      return admin.auth()
        .createUser({
          uid: document.id,
          email: email,
          password: generate({
            strict: true,
            numbers: true,
            symbols: true,
            uppercase: true,
          }),
        })
        .then(() => {
          functions.logger.info(`User created with email: ${email}.`);

          if (company) {
            const increment = admin.firestore.FieldValue.increment(1);

            company.update({employees: increment});
          }
        })
        .catch((e) => functions.logger.error("Error trying to create user", e));
    });

export default handleAddUnregisteredUser;
