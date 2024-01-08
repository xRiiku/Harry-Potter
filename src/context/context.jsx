"use client"
import React, { createContext, useState } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Crea el proveedor del contexto
export default function ContextProvider ({ children }) {
  // Usa useState para crear el estado global
  //Estado para el menú del navMobile
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    function toggleMenu (prev) {
        setIsMenuOpen(!prev)
    }
  //Estado para el Selector de personaje (Profesor, alumno, villano)
    const [isSelectorOpen, setIsSelectorOpen] = useState(false)

    function selectorFunction (prev) {
        setIsSelectorOpen(!prev)
    }

    const contextValue = {
        isMenuOpen,
        toggleMenu,
        isSelectorOpen,
        selectorFunction
    };

    return (
        // Proporciona el contexto y el estado a los componentes hijos
        <AppContext.Provider value={contextValue}>
        {children}
        </AppContext.Provider>
    );
};