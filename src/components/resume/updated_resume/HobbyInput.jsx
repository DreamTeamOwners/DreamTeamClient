import React from 'react';
import { Box, Text, Button, IconButton, Input } from '@chakra-ui/react';
import InputWithLabel from './InputWithLabel';

import {AiFillDelete, AiOutlinePlus, AiOutlineCheck} from 'react-icons/ai'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import AddButton from './AddButton';

const HobbyInput = ({resume,setResume}) => {


    const handleFormChange = (index, value) => {
        const newInputs = [...resume.hobbies];
        newInputs[index] = value;
        setResume((prevData) => ({
            ...prevData,
            hobbies: newInputs,
        }));
    };

    const handleAddInput = () => {
        setResume((prevData) => ({
            ...prevData,
            hobbies: [...resume.hobbies,'']
        }));
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...resume.hobbies];
        newInputs.splice(index, 1);
        setResume((prevData) => ({
            ...prevData,
            hobbies: newInputs,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Обработка отправки формы
        // Можете использовать inputs для получения введенных значений
    };

    console.log(resume.hobbies)

    return (

        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize={20} m={3}>
                        Хобби
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            {resume.hobbies.map((hobby, index) => {
                return (
                    <AccordionPanel pb={4} border={'1px lightgray solid'} borderRadius={10} m={4}>
                        <Box>
                            <Text>Хобби</Text>
                            <Input
                                key={index}
                                name='hobby'
                                variant='filled'
                                value={hobby}
                                onChange={(e) => handleFormChange(index, e.target.value)}
                            />
                        </Box>
                        <Box display={'flex'} justifyContent={'flex-end'} mt={4}>
                             <IconButton onClick={()=>handleRemoveInput(index)} icon={<AiFillDelete />} />
                            <Button ml={3} colorScheme='blue' leftIcon={<AiOutlineCheck />}>Готово</Button>
                        </Box>
                    </AccordionPanel>
                )
            })}
            <AccordionPanel>
                <Button onClick={handleAddInput} leftIcon={<AiOutlinePlus />}>Добавить хобби</Button>
            </AccordionPanel>
        </AccordionItem >
    )
}

export default HobbyInput