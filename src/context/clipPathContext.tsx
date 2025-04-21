// import useAddProductclipPathState from '@/hooks/useAddProductclipPathState'
import { createContext, useState } from 'react'

interface clipPathStateUseState {
    clipPathState: string
    setclipPathState: React.Dispatch<React.SetStateAction<string>>
}

export const clipPathStateContext = createContext({} as clipPathStateUseState)

export const clipPathStateProvider = ({ children }: {children: React.ReactNode
}) => {

    const [clipPathState, setclipPathState] = useState("");
    
    return (
        <clipPathStateContext.Provider value={{
            clipPathState, 
            setclipPathState
        }}>
            {children}
        </clipPathStateContext.Provider>
    )
}

export default clipPathStateProvider                                                                                                                                                                       
