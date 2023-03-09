import React from 'react'
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "../../styles/home.module.css"

import Background from '../../assets/background.png'
import Midground from '../../assets/midground.png'
import Foreground from '../../assets/foreground.png'

const HomePage = () => {
    const { toggleColorMode } = useColorMode()
    
    return (
        <>
        <Box className={styles.neutral}>
            {/* <Flex fontFamily="heading" height="20vh" alignItems="center" justifyContent="center" flexDirection="column" gap="10px"> 
                <Button onClick={toggleColorMode}>Toggle COLOR Mode</Button>
                <h1>Fuck</h1>
                <p>you</p>
    </Flex> */}

            <Flex h="100vh" fontFamily="heading" flexDirection="column" justifyContent="flex-end" p="0px 0px 10% 10%"> 
                <h1 className={styles.myName}>about</h1>
            </Flex>           
        </Box>
        </>
    )
}

export default HomePage