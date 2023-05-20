import React from 'react';
import SimpleInput from '../shared/SimpleInput';
import PhotoUploader from '../personal/PhotoUploder';
import { Box } from '@chakra-ui/react';

const Certificates = () => {
    return (
        <SimpleInput
        //label, value, handleChange, type, name
            name='Сертификаты'
            label='Сертификат'

        >
            <Box mt={4}>
                <PhotoUploader/>
            </Box>
        </SimpleInput>
    )
}

export default Certificates