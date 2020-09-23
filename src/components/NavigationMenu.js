import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link, useHistory} from 'react-router-dom';

const NavigationMenu = () => {
  const history = useHistory();
  console.log(history);
  const [currentMenu, setCurrentMenu] = React.useState(history.location.pathname);

  const handleItemClick = (_, { name }) => {
    setCurrentMenu(`/${name}`);
  }
  return (
    <Segment inverted>
      <Menu inverted secondary widths={4}>
        <Menu.Item
          as={Link} to="/"
          name='dashboard'
          active={currentMenu === '/'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link} to="/transaction"
          name='transaction'
          active={currentMenu === '/transaction'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link} to="/account"
          name='account'
          active={currentMenu === '/account'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link} to="/report"
          name='report'
          active={currentMenu === '/report'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  )
}

export default NavigationMenu;