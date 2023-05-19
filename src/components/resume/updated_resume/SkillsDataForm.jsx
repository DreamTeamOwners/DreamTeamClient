import React from 'react';
import SkillTemplate from './form/shared/SkillTemplate';

const SkillsDataForm = () => {
    return (
        <SkillTemplate
            name='Навыки'
            add_label='навыки'
            slider_label='Уровень'
            title_input_label='Навык'
        />
    )
}

export default SkillsDataForm