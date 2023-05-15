import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    first_name: 'Nuratan',
    last_name: 'Kadyrov',
    job_position: 'Frontend dev',
    phone_number: '+996700722720',
    country: 'Kyrgyzstan',
    city: 'Bishkek',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    github: 'https://github.com/Nuratann',
    image: 'https://cdn.vox-cdn.com/thumbor/5w9FJ8Fimki197z9orQZnJ3CyMo=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/24415978/rick_and_morty_s4_image.png',
    experience_start_time: '12.12.12',
    experience_end_time: '12.12.12',
    experience_title: 'Trainee Front-end',
    experience_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    education_end_year: '12.12.12',
    education_place: 'KTMU MANAS',
    education_title: 'Computer engineering',
  }

export const resumeSlice = createSlice({
    name: "resume",
    initialState: initialState,
    reducers: {
        update: (state, {payload}) => {
            state = payload
            console.log(state)
        }
    }
})

export const {actions, reducer} = resumeSlice