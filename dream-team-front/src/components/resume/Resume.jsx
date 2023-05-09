import React, { useState } from 'react';
import { ChakraProvider, Box, Grid, GridItem, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';

const ResumeBuilder = () => {
    const clearFormData = {
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        education: '',
    }
  const [formData, setFormData] = useState(clearFormData);

  const handleSubmit = (values) => {
    setFormData(values);
  };

  const handleInputChange = (e, setFieldValue,values) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
    setFormData(values);
  };

  return (
      <Box maxW="80%" mx="auto" mt={8} p={6}>
        <Heading mb={4}>Конструктор резюме</Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem borderRadius="md" boxShadow="md" borderWidth={1} p={4}>
            <Formik initialValues={{ name: '', email: '', phone: '', experience: '' }} onSubmit={handleSubmit}>
              {({ values, setFieldValue }) => (
                <Form>
                  <Field name="name">
                    {({ field }) => (
                      <FormControl mb={4}>
                        <FormLabel>Имя</FormLabel>
                        <Input {...field} placeholder="Введите ваше имя" onChange={(e) => handleInputChange(e, setFieldValue,values)} />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="email">
                    {({ field }) => (
                      <FormControl mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input {...field} type="email" placeholder="Введите ваш email" onChange={(e) => handleInputChange(e, setFieldValue)} />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="phone">
                    {({ field }) => (
                      <FormControl mb={4}>
                        <FormLabel>Телефон</FormLabel>
                        <Input {...field} placeholder="Введите ваш телефон" onChange={(e) => handleInputChange(e, setFieldValue)} />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="experience">
                    {({ field }) => (
                      <FormControl mb={4}>
                        <FormLabel>Опыт работы</FormLabel>
                        <Input {...field} placeholder="Введите ваш опыт работы" onChange={(e) => handleInputChange(e, setFieldValue)} />
                      </FormControl>
                    )}
                  </Field>
                  <Button type="submit" colorScheme="blue">Отправить</Button>
                </Form>
              )}
            </Formik>
          </GridItem>
          <GridItem borderRadius="md" boxShadow="md" borderWidth={1}  p={4}>
            {formData && (
              <Box mb={4}>
                <Text>Имя: {formData.name}</Text>
                <Text>Email: {formData.email}</Text>
                <Text>Телефон: {formData.phone}</Text>
                <Text>Опыт работы: {formData.experience}</Text>
              </Box>
            )}
          </GridItem>
        </Grid>
      </Box>
  );
};

export default ResumeBuilder;
