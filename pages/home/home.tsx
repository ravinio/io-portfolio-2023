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
        {/* <Box className={styles.background}>
            {/* <Flex fontFamily="heading" height="20vh" alignItems="center" justifyContent="center" flexDirection="column" gap="10px"> 
                <Button onClick={toggleColorMode}>Toggle COLOR Mode</Button>
                <h1>Fuck</h1>
                <p>you</p>
            </Flex> }

            <Flex h="100vh" fontFamily="heading" flexDirection="column" justifyContent="flex-end" p="0px 0px 10% 10%"> 
                <h1 className={styles.myName}>ravin io</h1>
                <h2 className={styles.myDescription}>ui/ux designer in a front-end developer’s body</h2>
            </Flex>           
        </Box> */}

        <Parallax pages={2} className={styles.myName} style={{ height: "100vh", display: "flex" }}> 

            <ParallaxLayer offset={0} speed={0.2}>
                <div className={styles.animationLayer} id={styles.background}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.1}>
                <div className={styles.animationLayer} id={styles.midground}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0}>
                <Flex className={styles.animationLayer} id={styles.foreground} h="100vh" fontFamily="heading" flexDirection="column" justifyContent="flex-end" p="0px 0px 10% 10%"> 
                    <h1 className={styles.myName}>ravin io</h1>
                    <h2 className={styles.myDescription}>ui/ux designer in a front-end developer’s body</h2>
                </Flex>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0}>
                <Flex className={styles.about}>
                    <p>About Me</p>
                </Flex>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={0} speed={1} style={{  backgroundSize: 'cover' }} className={styles.background} />
            
            <ParallaxLayer offset={0} speed={2} style={{  backgroundSize: 'cover' }} className={styles.midground} />

            <ParallaxLayer offset={0} speed={3} style={{  backgroundSize: 'cover' }} className={styles.foreground}>
                <Flex h="100vh" fontFamily="heading" flexDirection="column" justifyContent="flex-end" p="0px 0px 10% 10%"> 
                    <h1 className={styles.myName}>ravin io</h1>
                    <h2 className={styles.myDescription}>ui/ux designer in a front-end developer’s body</h2>
                </Flex>
            </ParallaxLayer> */}

        </Parallax>
        </>
    )
}

export default HomePage