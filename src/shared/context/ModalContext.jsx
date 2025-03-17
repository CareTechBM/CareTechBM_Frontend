import { createContext } from "react";
import { useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);

    const handleOpen = () => setOpen(true);

    function handleClose (){setActive(false)};
    
    const handleActive = () => setActive(true);

    return (
        <ModalContext.Provider value={{
            open,
            active,
            handleActive,
            handleClose,
            handleOpen
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };