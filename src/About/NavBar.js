import React from 'react'
import {Header, Menu} from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Header textAlign='center' style={{padding: '1em', marginLeft: '5%', width: '90%', backgroundColor: 'white', opacity: '.95', borderRadius: '15px' }}>
            {/* mattaquino.dev */}
        <Menu pointing secondary position='right'>
        <Menu.Menu position='right'>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='projects'
        />
        <Menu.Item
          name='blogs'
        />
        </Menu.Menu>

      </Menu>
      </Header>
    )
}

export default NavBar
