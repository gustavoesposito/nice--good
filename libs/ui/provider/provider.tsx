'use client'
import React, { createContext, ReactNode, useContext } from 'react'

type UIContext = {}

type UIProviderProps = {
  children: ReactNode
}

// @ts-ignore
const Context = createContext<UIContext>({})

export function useUI() {
  return useContext(Context)
}

export function UIProvider({ children }: UIProviderProps) {
  return (
    //TODO: use ThemeProvider from MUI
    <>
      <Context.Provider value={{}}>{children}</Context.Provider>
    </>
  )
}
