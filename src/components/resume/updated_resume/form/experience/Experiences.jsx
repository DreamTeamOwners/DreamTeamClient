import React from 'react';
import FormTemplate from '../shared/FormTemplate';

const Experiences = ({resume, handleChange}) => {
    return (
        <FormTemplate
            target='experiences'
            accordion_name={'Место работы'}
            title_input={'Должность'}
            organization_input={'Работодатель'}
            forms={resume.experiences}
            handleChange={handleChange}
        />
    )
}

export default Experiences