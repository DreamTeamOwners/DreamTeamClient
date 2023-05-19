import React from 'react';
import FormTemplate from '../shared/FormTemplate';


const Educations = () => {
    return (
        <FormTemplate
            name='Образование'
            title_input_label='Образование'
            add_label='образование'
            description_label='Описание'
            city_input_label='Город'
            place_input_label='Учебное заведение'                    
        />        
    )
}

export default Educations