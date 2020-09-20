import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  const [currentMenu, setCurrentMenu] = React.useState('dashboard');

  const handleItemClick = (_, { name }) => {
    setCurrentMenu(name);
  }
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
          as={Link} to="/dashboard"
          name='dashboard'
          active={currentMenu === 'dashboard'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link} to="/transaction"
          name='transaction'
          active={currentMenu === 'transaction'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link} to="/account"
          name='account'
          active={currentMenu === 'account'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link} to="/report"
          name='report'
          active={currentMenu === 'report'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  )
}

export default NavigationMenu;