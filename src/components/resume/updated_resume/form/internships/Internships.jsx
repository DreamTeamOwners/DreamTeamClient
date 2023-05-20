import React from 'react';
import FormTemplate from '../shared/FormTemplate';

const Internships = ({resume, handleChange}) => {
    return (
        <FormTemplate
            target='internships'
            accordion_name={'Стажировки'}
            title_input={'Стажировка'}
            organization_input={'Работодатель'}
            forms={resume.internships}
            handleChange={handleChange}
        />
    )
}

export default Internships