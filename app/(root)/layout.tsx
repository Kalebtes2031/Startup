import React from 'react'
import Navbar from '../../components/Navbar'
import { Toaster } from "sonner";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <main >
            <Navbar/>
            {children}
            <Toaster richColors position="top-right" />
        </main>
    )
}

export default layout