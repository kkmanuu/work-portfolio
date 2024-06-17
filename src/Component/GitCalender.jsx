import { Box, Flex, Heading } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';

export default function GitCalender(){
    return (
        <Box  pt='25px' textAlign='center'>
         <Box w='80%'  margin="auto" borderTop="1.5px solid #00796B"></Box>
            <Heading p='25px' color='#00796B' size='2xl'>GitHub</Heading>
            <Box p='40px 20px' w='97%' m='auto' textAlign='center'>
            <Flex justify='center'  p='45px' className="react-activity-calendar"  color='#00796B' >
            <GitHubCalendar  style={{width:"100%"}} username="kkmanuu" />
            </Flex>
            <Flex  mt='40px' flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}} justifyContent='space-around' alignItems='center' gap='25px'>
                <Box >
                    <img display="block" id="github-stats-card" src='https://camo.githubusercontent.com/98fef3cdf1922b3c8912446be97825d6e01d1ce3a5ff3d4c003351fe046eb590/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b6b6d616e75752673686f775f69636f6e733d74727565266c6f63616c653d656e' alt="Github Staus Card"/>
                </Box>
                <Box >
            <img style={{display:'block'}} id="github-streak-stats"  src="https://camo.githubusercontent.com/545eb1da63523de893be37ccffe82aef4e2481825f42e9d67042421dc0c3ebc5/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6b6b6d616e757526" alt="Github streak stats"/>
            </Box>
            </Flex> 
            <Flex  mt='40px'  justifyContent='center'>
              <img display="block" id="github-top-langs" src="https://camo.githubusercontent.com/f6d7d8f2b3adceb6461d6223d1195b3f192eacef6ba2a1fbeea797b42390d1b4/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6b6b6d616e75752673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"/>
                </Flex>
            </Box>
        </Box>
    )
}