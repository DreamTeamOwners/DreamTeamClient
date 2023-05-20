import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const BlockTemplate = ({data, block_title}) => {
    return (
        <Box m={4} borderBottom={'1px solid lightgray'} pb={4}>
            <Text fontSize={24} fontWeight={'medium'}>{block_title}</Text>
            {}
            {/* title:'',
            organization:'',
            city:'',
            description:'',
            start_date:'',
            end_date:'' */}
            {data.map((d)=>{
                return (
                    <Box mt={2}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={'semibold'}>{d.title}</Text>
                            <Text>{d.start_date + ' - ' + d.end_date}</Text>
                        </Box>
                        <Text fontWeight={'semibold'} color={'lightgray'}>{d.organization + ', ' + d.city}</Text>
                        <Text fontSize={14}>{d.description}</Text>
                    </Box>
                )
            })}
            
        </Box>
    )
}

export default BlockTemplate