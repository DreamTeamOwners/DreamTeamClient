import { AccordionPanel, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus} from 'react-icons/ai'

const AddButton = (props) => {
    return (
        <AccordionPanel>
                <Button leftIcon={<AiOutlinePlus/>}>Добавить {props.add_label}</Button>
        </AccordionPanel>
    )
}

export default AddButton