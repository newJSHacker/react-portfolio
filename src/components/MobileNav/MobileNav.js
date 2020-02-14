import React from 'react'
import { User32, Code32, Portfolio32, Education32 } from '@carbon/icons-react'

import {Container, Spacer, NavWrapper, NavButton, NavLink} from './styles'

const MobileNav = () => {
    return(
        <Container>
            <Spacer />
            <NavWrapper>
                <NavLink to="/react-portfolio/">
                    <NavButton
                        hasIconOnly
                        renderIcon = { User32 }
                        iconDescription = "Me"
                        tooltipPosition = "bottom"
                    />
                </NavLink>
                <NavLink to="/react-portfolio/projects">
                    <NavButton
                        hasIconOnly
                        renderIcon = {Code32}
                        iconDescription = "Projects"
                        tooltipPosition = "bottom"
                    />
                </NavLink>
                <NavLink to="/react-portfolio/work">
                    <NavButton
                        hasIconOnly
                        renderIcon={Portfolio32}
                        iconDescription="Work"
                        tooltipPosition="bottom"
                    />
                </NavLink>
                <NavLink to="/react-portfolio/education">
                    <NavButton
                        hasIconOnly
                        renderIcon={Education32}
                        iconDescription="bottom"
                    />
                </NavLink>
            </NavWrapper>
        </Container>
    )
}

export default MobileNav