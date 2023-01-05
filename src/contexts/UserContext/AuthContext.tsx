import { element } from "prop-types";
import { useEffect } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";

export interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({});

export function AuthProvider({ children }: IAuthProviderProps) {
  return;
  <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
