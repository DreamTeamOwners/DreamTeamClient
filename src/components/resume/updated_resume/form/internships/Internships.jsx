import React from 'react';
import FormTemplate from '../shared/FormTemplate';

const Internships = () => {
    return (
        <FormTemplate
            name='Место стажировки'
            title_input_label='Должность'
            add_label='место стажировки'
            description_label='Описание'
            city_input_label='Город'
            place_input_label='Работодатель'                    
        />
    )
}

export default Internships