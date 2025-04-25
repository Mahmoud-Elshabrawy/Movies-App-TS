import { createContext, ReactNode, useEffect, useState } from 'react'

export const LightModeContext = createContext({} as lightModeOperations)

type lightModeOperations = {
    toggleLightMode: () => void,
    lightMode: boolean
}
type childrenProps = {
    children: ReactNode
}
const LightModeProvider = ({children}: childrenProps) => {
    const [lightMode, setLightMode ] = useState(() => {
        return JSON.parse(localStorage.getItem("light") || "false")
    })

    const toggleLightMode = () => {
        setLightMode((prev: boolean) =>  {
            const newMode = !prev
            localStorage.setItem("light", JSON.stringify(newMode))
            return newMode
        })
    }
    useEffect(() => {
        if (lightMode) {
                document.body.classList.add("light");
        } else {
                document.body.classList.remove("light");
        }
    }, [lightMode]);

  return (
    <LightModeContext.Provider value={{toggleLightMode, lightMode}}>
        {children}
    </LightModeContext.Provider>
  )
}

export default LightModeProvider