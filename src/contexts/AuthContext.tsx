import { useEffect, useState, createContext, ReactNode } from "react";

import { auth, firestore } from "../services/firebase";

type User = {
  id: string;
  email: string | null;
  name: string | null;
  type?: "employee" | "company";
};

type AuthContextType = {
  user: User | undefined;
  loading: boolean;
  logged: boolean;
  createUserWithEmailAndPassword: (
    email: string,
    password: string,
    name: string,
    isCompany: boolean
  ) => Promise<void>;
  signInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  addUnregisteredUser: (email: string, companyId: string) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    }

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { uid, email } = user;

        window.localStorage.setItem("user", JSON.stringify({ uid, email }));

        const userRef = firestore.doc(`users/${uid}`);

        const userDocInfos = await userRef.get();

        const userData = userDocInfos.data();

        const newUser: User = {
          id: uid,
          email,
          name: null,
        };

        if (userData?.type) newUser.type = userData.type;
        if (userData?.name) newUser.name = userData.name;

        setUser(newUser);
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  const createUserWithEmailAndPassword: AuthContextType["createUserWithEmailAndPassword"] =
    async (email, password, name, isCompany = false) => {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (user) {
        const { uid, email } = user;

        try {
          await firestore
            .collection("users")
            .doc(uid)
            .set({ email, name, type: isCompany ? "company" : "employee" });
        } catch (err) {
          console.error("Error while trying to set user data", err);
        }
      }
    };

  const signOut = async () => {
    window.localStorage.removeItem("user");
    await auth.signOut();
  };

  const resetPassword = async (email: string) => {
    await auth.sendPasswordResetEmail(email);
  };

  const addUnregisteredUser = async (email: string, companyId: string) => {
    const usersRef = firestore.collection("users");

    try {
      await usersRef.add({
        email,
        company: usersRef.doc(companyId),
        type: "employee",
      });
    } catch (err) {
      console.error("Error while trying to create unregistered user.", { err });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logged: !!user,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        resetPassword,
        addUnregisteredUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
