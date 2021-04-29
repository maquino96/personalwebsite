import React from 'react'
import {Header, Menu} from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Header textAlign='center' style={{padding: '1em', width: '90%', marginLeft: '5%', backgroundColor: 'white', opacity: '.95' }}>
            mattaquino.dev
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
