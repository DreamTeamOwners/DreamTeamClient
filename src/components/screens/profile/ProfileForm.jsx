import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Progress,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowBackIcon, EditIcon } from '@chakra-ui/icons';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    job: '',
    team: '',
    office: '',
    startDate: '',
    country: '',
    city: '',
  });

  const ini = [
    {
        children: 'First Name',
        value: profile.firstName,
        name: 'firstName',
        type: 'text'
      },
      {
        children: 'Last Name',
        value: profile.lastName,
        name: 'lastName',
        type: 'text'
      },
      {
        children: 'Email',
        value: profile.email,
        name: 'email',
        type: 'email'
      },
      {
        children: 'Phone Number',
        value: profile.phoneNumber,
        name: 'phoneNumber',
        type: 'tel'
      },
      {
        children: 'Birth Date',
        value: profile.birthDate,
        name: 'birthDate',
        type: 'date'
      },
      {
        children: 'Gender',
        value: profile.gender,
        name: 'gender',
        type: 'text'
      },
      {
        children: 'Job',
        value: profile.job,
        name: 'job',
        type: 'text'
      },
      {
        children: 'Team',
        value: profile.team,
        name: 'team',
        type: 'text'
      },
      {
        children: 'Office',
        value: profile.office,
        name: 'office',
        type: 'text'
      },
      {
        children: 'Start Date',
        value: profile.startDate,
        name: 'startDate',
        type: 'date'
      },
      {
        children: 'Country',
        value: profile.country,
        name: 'country',
        type: 'text'
      },
      {
        children: 'City',
        value: profile.city,
        name: 'city',
        type: 'text'
      }
    ]

    const inputGroups = ini.map((ob)=>{
        return(
            <InputGroup  display={'grid'} gridTemplateColumns={'2fr 3fr'}>
                  <InputLeftAddon children={ob.children} />
                  <Input
                      type={ob.type}
                      value={ob.value}
                      onChange={(e) => handleChange(ob.name, e.target.value)}
                    />
            </InputGroup>            
        )
    })

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  let completion = 0

  const calculateProfileCompletion = () => {
    const filledFieldsCount = Object.values(profile).filter(Boolean).length;
    const totalFieldsCount = Object.keys(profile).length;
    completion = filledFieldsCount
    return (filledFieldsCount / totalFieldsCount) * 100;
  };

  return (
      <Box p={4} my={16}>
          <Flex alignItems="center" mb={4}>
              <IconButton
                  aria-label="Go back"
                  icon={<ArrowBackIcon />}
                  mr={2}
                  onClick={() => {
                      // Handle back button click
                  }}
              />
              <IconButton
                  aria-label="Edit profile"
                  icon={<EditIcon />}
                  mr={2}
                  onClick={() => {
                      // Handle edit button click
                  }}
              />
              <Text fontWeight="bold" mr={2}>{`${profile.firstName} ${profile.lastName}`}</Text>
              <Progress value={calculateProfileCompletion()} size="xs" w={24} />
              <Text>{completion+'/12'}</Text>
          </Flex>
          
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={12}>
          <Box 
             
            display={'grid'} 
            gridTemplateColumns={'repeat(3,1fr)'} 
            gridTemplateRows={'repeat(5,1fr)'} 
            spacing={4}
            gap={6}
            maxW={'80%'}
        >
            <Text gridColumnStart={'span 3'}  fontSize={24}>Профиль</Text>
              {inputGroups}
          </Box>
          </Box>
      </Box>
  );
};

export default ProfileForm;
