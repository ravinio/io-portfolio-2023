import React from 'react'
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import styles from "../../styles/home.module.css"

const HomePage = () => {
    const { toggleColorMode } = useColorMode()
    
    return (
        <Box className={styles.background}>
            <Flex fontFamily="heading" height="100vh" alignItems="center" justifyContent="center" flexDirection="column" gap="10px"> 
                <Button onClick={toggleColorMode}>Toggle COLOR Mode</Button>
                <h1>Fuck</h1>
                <p>you</p>
            </Flex>

            <Box>
                <h1>ravin io</h1>
                <h2>ui/ux designer in a front-end developer’s body</h2>
            </Box>
        </Box>
    )
}

export default HomePage