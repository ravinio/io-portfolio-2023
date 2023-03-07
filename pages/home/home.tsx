import React from 'react'
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import styles from "../../styles/home.module.css"

const HomePage = () => {
    const { toggleColorMode } = useColorMode()
    
    return (
        <Box className={styles.background}>
            {/* <Flex fontFamily="heading" height="20vh" alignItems="center" justifyContent="center" flexDirection="column" gap="10px"> 
                <Button onClick={toggleColorMode}>Toggle COLOR Mode</Button>
                <h1>Fuck</h1>
                <p>you</p>
            </Flex> */}

            <Flex h="100vh" fontFamily="heading" flexDirection="column" justifyContent="flex-end" p="0px 0px 10% 10%"> 
                <h1 className={styles.myName}>ravin io</h1>
                <h2 className={styles.myDescription}>ui/ux designer in a front-end developer’s body</h2>
            </Flex>           
        </Box>
    )
}

export default HomePage