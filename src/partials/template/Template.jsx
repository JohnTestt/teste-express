import { useState } from "react";
import { Drawer } from "../../components/Drawer/Drawer";
import {MenuButton, Main} from './style/style'


export const Template = ({ children }) => {

    const [expanded, setExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false); // Estado para mobile


    const handleOpen = () => {
        setExpanded(!expanded);
        setIsMobileOpen(!isMobileOpen);
        
    };

    const handleClosetMobileDrawer= () => {
        setIsMobileOpen(false);
    }

    return (
        <>
         <MenuButton onClick={() =>handleOpen()} isExpanded={expanded}>
            {
            expanded ? 'open' : 'closet'
            }
        </MenuButton>

      <Drawer 
      expanded = {expanded}
      isMobileOpen = {isMobileOpen}
      onClose= {() => {handleClosetMobileDrawer()}}
      /> 
        
        <Main open = {expanded}>
            {children}
        </Main>
    </>
    )
}