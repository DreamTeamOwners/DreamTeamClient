import React from 'react';
import { Box,  Text, Textarea } from '@chakra-ui/react';

import InputWithLabel from './InputWithLabel';

import CustomAccordionItem from './CustomAccordionItem';
import CustomAccordionPanel from './CustomAccordionPanel';

const FormTemplate = ({target, accordion_name, title_input, organization_input, forms, handleChange}) => {

    const handleInnerChange = (index, event) => {
        const newForms = [...forms];
        newForms[index] = {...newForms[index],[event.target.name]:event.target.value};
        handleChange({target:{name:target, value:newForms}})
      };
    
      const handleAdd = () => {
        handleChange({target:{name:target, value:[...forms, {}]}})
      };
    
      const handleRemove = (index) => {
        const newForms = [...forms];
        newForms.splice(index, 1);
        handleChange({target:{name:target, value:newForms}})
      };
            //input:{
            // title:'',
            // organization:'',
            // city:'',
            // description:'',
            // start_date:'',
            // end_date:''
            //}
    return (
        <CustomAccordionItem
            name={accordion_name}
            addButton={'true'}
            handleAdd={handleAdd}
        >

            {forms.map((form, index)=>{
                return (
                    <CustomAccordionPanel
                        handleRemove={handleRemove}
                        index={index}
                    >
                        <Box gridColumnStart={'span 2'}>
                            <InputWithLabel
                                name='title'
                                label={title_input}
                                value={form.title}
                                handleChange={(e) => handleInnerChange(index,e)}
                            />
                        </Box>

                        <InputWithLabel 
                            name='organization'
                            label={organization_input}
                            value={form.organization}
                            handleChange={(e) => handleInnerChange(index,e)}
                        />
                        <InputWithLabel 
                            name='city'
                            label='Город'
                            value={form.city}
                            handleChange={(e) => handleInnerChange(index,e)}   
                        />

                        <InputWithLabel 
                            label='Дата начала' 
                            type='date' 
                            name='start_date'
                            value={form.start_date}
                            handleChange={(e) => handleInnerChange(index,e)}   
                        />
                        <InputWithLabel 
                            label='Дата окончания' 
                            type='date' 
                            name='end_date'
                            value={form.end_date}
                            handleChange={(e) => handleInnerChange(index,e)}   
                        />
                        <Box gridColumnStart={'span 2'}>
                            <Text>Описание</Text>
                            <Textarea 
                                variant={'filled'}
                                name='description'
                                value={form.description}
                                onChange={(e) => handleInnerChange(index,e)}
                            />
                        </Box>
                    </CustomAccordionPanel>
                )
            })}
        </CustomAccordionItem>
    )
}

export default FormTemplate