import {HeaderNav, WebsiteLogo, Own} from './styledComponents'

const Header = () => (
  <HeaderNav>
    <WebsiteLogo
      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      alt="website logo"
    />
    <Own>Designed by Ashiq</Own>
  </HeaderNav>
)

export default Header
