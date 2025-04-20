// import useAddProductClipPath from '@/hooks/useAddProductClipPath'
import { createContext, useState } from 'react'

interface clipPathUseState {
    clipPath: string
    setClipPath: React.Dispatch<React.SetStateAction<string>>
}

export const ClipPathContext = createContext({} as clipPathUseState)

export const ClipPathProvider = ({ children }: {children: React.ReactNode
}) => {

    const [clipPath, setClipPath] = useState("");
    
    return (
        <ClipPathContext.Provider value={{
            clipPath, 
            setClipPath
        }}>
            {children}
        </ClipPathContext.Provider>
    )
}

export default ClipPathProvider                                                                                                                                                                       
