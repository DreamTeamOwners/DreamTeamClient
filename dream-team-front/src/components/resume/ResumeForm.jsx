import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Textarea,
    Grid,
} from '@chakra-ui/react';
import { actions } from '../../store/resume/resume.slice';



const ResumeForm = ({formData, handleInputChange, initialValues}) => {
    
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        //event.preventDefault();
        dispatch(actions.update(formData));
      };
    return (
        <Grid  gap={4}>
            <Box height={600} overflowY={'scroll'} p={4}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <FormControl>
                            <FormLabel htmlFor="first_name">First Name</FormLabel>
                            <Field
                                as={Input}
                                id="first_name"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="last_name">Last Name</FormLabel>
                            <Field
                                as={Input}
                                id="last_name"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="job_position">Job Position</FormLabel>
                            <Field
                                as={Input}
                                id="job_position"
                                name="job_position"
                                value={formData.job_position}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="phone_number">Phone Number</FormLabel>
                            <Field
                                as={Input}
                                id="phone_number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="country">Country</FormLabel>
                            <Field
                                as={Input}
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="city">City</FormLabel>
                            <Field
                                as={Input}
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="description">Description</FormLabel>
                            <Field
                                as={Textarea}
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="github">GitHub</FormLabel>
                            <Field
                                as={Input}
                                id="github"
                                name="github"
                                value={formData.github}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="image">Image</FormLabel>
                            <Field
                                as={Input}
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="experience_start_time">Experience Start Time</FormLabel>
                            <Field
                                as={Input}
                                id="experience_start_time"
                                name="experience_start_time"
                                value={formData.experience_start_time}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="experience_end_time">Experience End Time</FormLabel>
                            <Field
                                as={Input}
                                id="experience_end_time"
                                name="experience_end_time"
                                value={formData.experience_end_time}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="experience_title">Experience Title</FormLabel>
                            <Field
                                as={Input}
                                id="experience_title"
                                name="experience_title"
                                value={formData.experience_title}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="experience_description">Experience Description</FormLabel>
                            <Field
                                as={Textarea}
                                id="experience_description"
                                name="experience_description"
                                value={formData.experience_description}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="education_end_year">Education End Year</FormLabel>
                            <Field
                                as={Input}
                                id="education_end_year"
                                name="education_end_year"
                                value={formData.education_end_year}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="education_place">Education Place</FormLabel>
                            <Field
                                as={Input}
                                id="education_place"
                                name="education_place"
                                value={formData.education_place}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <FormControl gridColumn="1 / span 2">
                            <FormLabel htmlFor="education_title">Education Title</FormLabel>
                            <Field
                                as={Input}
                                id="education_title"
                                name="education_title"
                                value={formData.education_title}
                                onChange={handleInputChange}
                            />
                        </FormControl>


                        <Box mt={4}>
                            <Button type="submit" disabled>
                                Save
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </Box>
        </Grid>
    );
};

export default ResumeForm;
