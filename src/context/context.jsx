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
    const [isProfesorOpen, setIsProfesorOpen] = useState(false)
    const [isStudentOpen, setIsStudentOpen] = useState(false)
    const [isVillainOpen, setIsVillainOpen] = useState(false)

    function profesorFunction (prev) {
        setIsProfesorOpen(!prev)
        setIsStudentOpen(false)
        setIsVillainOpen(false)
    }

    function studentFunction (prev) {
        setIsStudentOpen(!prev)
        setIsProfesorOpen(false)
        setIsVillainOpen(false)
    }

    function villainFunction (prev) {
        setIsVillainOpen(!prev)
        setIsStudentOpen(false)
        setIsProfesorOpen(false)
    }

    const contextValue = {
        isMenuOpen,
        toggleMenu,
        isProfesorOpen,
        isStudentOpen,
        isVillainOpen,
        profesorFunction,
        studentFunction,
        villainFunction
    };

    return (
        // Proporciona el contexto y el estado a los componentes hijos
        <AppContext.Provider value={contextValue}>
        {children}
        </AppContext.Provider>
    );
};