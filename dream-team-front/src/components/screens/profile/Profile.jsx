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

const Profile = () => {
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

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({ ...prevProfile, [field]: value }));
  };

  const calculateProfileCompletion = () => {
    const filledFieldsCount = Object.values(profile).filter(Boolean).length;
    const totalFieldsCount = Object.keys(profile).length;
    return (filledFieldsCount / totalFieldsCount) * 100;
  };

  return (
      <Box p={4}>
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
          </Flex>
          <Text fontSize={24}>Профиль</Text>
          <Box pt={4} display={'grid'} gridTemplateColumns={'repeat(3,1fr)'} gridTemplateRows={'repeat(4,1fr)'} spacing={4}>
              <InputGroup>
                  <InputLeftAddon children="First Name" />
                  <Input
                      value={profile.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Last Name" />
                  <Input
                      value={profile.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                  />
              </InputGroup>


              <InputGroup>
                  <InputLeftAddon children="Email" />
                  <Input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Phone Number" />
                  <Input
                      type="tel"
                      value={profile.phoneNumber}
                      onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Birth Date" />
                  <Input
                      type="date"
                      value={profile.birthDate}
                      onChange={(e) => handleChange('birthDate', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Gender" />
                  <Input
                      value={profile.gender}
                      onChange={(e) => handleChange('gender', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Job" />
                  <Input
                      value={profile.job}
                      onChange={(e) => handleChange('job', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Team" />
                  <Input
                      value={profile.team}
                      onChange={(e) => handleChange('team', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Office" />
                  <Input
                      value={profile.office}
                      onChange={(e) => handleChange('office', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Start Date" />
                  <Input
                      type="date"
                      value={profile.startDate}
                      onChange={(e) => handleChange('startDate', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="Country" />
                  <Input
                      value={profile.country}
                      onChange={(e) => handleChange('country', e.target.value)}
                  />
              </InputGroup>

              <InputGroup>
                  <InputLeftAddon children="City" />
                  <Input
                      value={profile.city}
                      onChange={(e) => handleChange('city', e.target.value)}
                  />
              </InputGroup>



          </Box>
      </Box>
  );
};

export default Profile;
