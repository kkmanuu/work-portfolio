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
                    <img display="block" id="github-status-card" src='https://camo.githubusercontent.com/05431107f731eb99ccd990c803f7d6f2b5297f6d912a91a13bdec034a8f8a68f/68747470733a2f2f6769746875622d726561646d652d73746174732d6d617576652d74656e2e76657263656c2e6170702f6170693f757365726e616d653d6b6b6d616e75752673686f775f69636f6e733d7472756526686964655f626f726465723d7472756526636f756e745f707269766174653d7472756526696e636c7564655f616c6c5f636f6d6d6974733d74727565' alt="Github Staus Card"/>
                </Box>
                <Box >
            <img style={{display:'block'}} id="github-Trophies"  src="https://camo.githubusercontent.com/5c22fc7118d7fe06cb49c28dbfea1bada4e9f29ba323df456a844d54a4272285/68747470733a2f2f6769746875622d70726f66696c652d74726f7068792e76657263656c2e6170702f3f757365726e616d653d6b6b6d616e757526636f6c756d6e3d3826726f773d31" alt="Github streak stats"/>
            </Box>
            </Flex> 
            <Flex  mt='40px'  justifyContent='center'>
              <img display="block" id="github-graphs" src="https://camo.githubusercontent.com/7d1bb6c3433efd6f2891dc2474327297112eb69971220cf364c679d1f9f26603/68747470733a2f2f6769746875622d726561646d652d61637469766974792d67726170682e76657263656c2e6170702f67726170683f757365726e616d653d6b6b6d616e7575267468656d653d6d696e696d616c"/>
                </Flex>
            </Box>
        </Box>
    )
}