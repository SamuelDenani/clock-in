import * as functions from "firebase-functions";

const handleAddRegister =
  functions
    .firestore
    .document("registers/{docId}")
    .onCreate((register) => {
      const {employee, type} = register.data();

      functions.logger.info(register);

      return employee.update({
        lastRegister: register.ref,
        lastRegisterType: type,
      })
        .then(() => {
          functions.logger.info("User update.");
        })
        .catch((e: string) => functions.logger.error("Error updating user", e));
    });

export default handleAddRegister;
