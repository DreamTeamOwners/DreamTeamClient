import React from 'react';
import FormTemplate from '../shared/FormTemplate';

const Courses = () => {
    return (
        <FormTemplate
            name='Курсы'
            title_input_label='Название курса'
            add_label='место обчения'
            description_label='Описание'
            city_input_label='Город'
            place_input_label='Образовательное учереждение'                    
        />
    )
}

export default Courses