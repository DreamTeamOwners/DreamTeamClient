import React, { useState } from 'react';
import {  Box, Grid, GridItem, Heading} from '@chakra-ui/react';
import ResumeForm from './ResumeForm';
import ResumeView from './ResumeView';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/resume/resume.slice';


const ResumeBuilder = () => {

  const dispatch = useDispatch()
  const resume = useSelector(state => state.resume)

  const [formData, setFormData] = useState(resume);

    const handleInputChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));        
    };
    
  return (
      <Box maxW="90%" mx="auto" mt={8} p={6}>
        <Heading mb={4}>Конструктор резюме</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem borderRadius="md" boxShadow="md" borderWidth={1} p={4}>
            <ResumeForm 
              formData={formData} 
              handleInputChange={handleInputChange}
              initialValues={resume}
            />
          </GridItem>
          <GridItem borderRadius="md" boxShadow="md" borderWidth={1}  p={4}>
            <ResumeView formData={formData}/>
          </GridItem>
        </Grid>
      </Box>
  );
};

export default ResumeBuilder;
