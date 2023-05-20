import React from 'react';
import FormTemplate from '../shared/FormTemplate';

const Courses = ({resume,handleChange}) => {
    return (
        <FormTemplate
            target='courses'
            accordion_name={'Курсы'}
            title_input={'Курс'}
            organization_input={'Учебное заведение'}
            forms={resume.courses}
            handleChange={handleChange}
        />
    )
}

export default Courses