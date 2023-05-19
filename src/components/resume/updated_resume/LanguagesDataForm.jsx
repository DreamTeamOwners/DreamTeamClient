import React from 'react';
import SkillTemplate from './form/shared/SkillTemplate';

const LanguagesDataForm = () => {
    return (
        <SkillTemplate
            name='Языки'
            add_label='языки'
            slider_label='Уровень'
            title_input_label='Язык'
        />
    )
}

export default LanguagesDataForm