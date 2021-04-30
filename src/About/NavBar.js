import React from 'react'
import {Header, Menu} from 'semantic-ui-react'

const NavBar = () => {
    return (

        <Menu inverted pointing secondary position='right'>
        <Header inverted style={{marginLeft: '15%', marginBottom: '0', width: '90%', opacity: '.95', borderRadius: '15px', fontSize:'24px' }}>mattaquino.dev</Header>
        {/* <Menu.Menu position='right' style={{marginRight: '3vw'}}>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='projects'
        />
        <Menu.Item
          name='blogs'
        />
        </Menu.Menu> */}
      </Menu>

    )
}

export default NavBar
