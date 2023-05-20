import React from 'react';
import FormTemplate from '../shared/FormTemplate';


const Educations = ( {resume, handleChange}) => {
    return (
        //{target, accordion_name, title_input, organization_input, forms, handleChange}
        <FormTemplate

            target='educations'
            accordion_name={'Образование'}
            title_input={'Образование'}
            organization_input={'Учебное заведение'}
            forms={resume.educations}
            handleChange={handleChange}                 
        />        
    )
}

export default Educations