"use client"
import React, { createContext, useState } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Crea el proveedor del contexto
export default function ContextProvider ({ children }) {
  // Usa useState para crear el estado global
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu (prev) {
        setIsMenuOpen(!prev)
    }

    const contextValue = {
        isMenuOpen,
        toggleMenu
    };

    return (
        // Proporciona el contexto y el estado a los componentes hijos
        <AppContext.Provider value={contextValue}>
        {children}
        </AppContext.Provider>
    );
};