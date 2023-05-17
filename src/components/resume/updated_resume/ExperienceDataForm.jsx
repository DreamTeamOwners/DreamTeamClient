import React from 'react';
import FormTemplate from './FormTemplate';

const ExperienceDataForm = () => {
    return (
        <FormTemplate
            name='Место работы'
            title_input_label='Должность'
            add_label='место работы'
            description_label='Описание'
            city_input_label='Город'
            place_input_label='Работодатель'                    
        />
    )
}

export default ExperienceDataForm