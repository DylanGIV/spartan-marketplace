import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { DataStore } from 'aws-amplify';
import {
  AddCompany,
  AddOwnerToCompany,
  AddUserToCompany,
  CreateUserDetails,
} from '../../utils/utilsAmplify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router';
import { Company } from '../../models';
import {
  ScrollView,
  Text,
  useAuthenticator,
  useTheme,
} from '@aws-amplify/ui-react';
import UserAndCompanyFormContainer from '../../ui-components/UserAndCompanyFormContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserDetailsForm from '../../ui-components/UserDetailsForm';
import CompanyDetails from '../../ui-components/CompanyDetails';
import CompanyCreateJoinType from '../../ui-components/CompanyCreateJoinType';
import CompanyCreateDetails from '../../ui-components/CompanyCreateDetails';
import CompanyJoinForm from '../../ui-components/CompanyJoinForm';

export default function CompanyAndUserDetailsForm() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [isLogoSubmitted, setIsLogoSubmitted] = useState(false);
  const [company, setCompany] = useState(null);
  const [companySubmitButtonDisabled, setCompanySubmitButtonDisabled] =
    useState(true);

  const [companyCreate, setCompanyCreate] = useState(true);

  const navigate = useNavigate();
  const { user } = useAuthenticator();

  const [newCompany, setNewCompany] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    fax: '',
    logo: null,
  });

  const [userFormDetails, setUserFormDetails] = useState({
    firstName: '',
    lastName: '',
    contactEmail: '',
    contactPhone: '',
  });

  console.log(userFormDetails);

  const { tokens } = useTheme();

  const [existingCompanies, setExistingCompanies] = useState([]);

  useEffect(() => {
    if (company) {
      setCompanySubmitButtonDisabled(false);
    } else {
      setCompanySubmitButtonDisabled(true);
    }
  }, [company]);

  useEffect(() => {
    const getExistingCompanies = async () => {
      try {
        DataStore.observeQuery(Company).subscribe((snapshot) => {
          const { items, isSynced } = snapshot;
          setExistingCompanies(items);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getExistingCompanies();
  }, []);

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNewCompanyChange = (event) => {
    const { name, value } = event.target;
    setNewCompany({ ...newCompany, [name]: value });
  };
  const handleUserDetailsChange = (event) => {
    const { name, value } = event.target;
    setUserFormDetails({ ...userFormDetails, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setNewCompany({ ...newCompany, phone: value });
  };

  const handleLogoChange = (event) => {
    if (!event.target.files[0]) {
      return;
    }
    const fileSize = event.target.files[0].size / 1024 / 1024; // Convert bytes to megabytes
    if (fileSize > 1) {
      // Limit the file size to 1 MB
      alert('File size cannot exceed 1 MB');
      return;
    }
    setNewCompany({ ...newCompany, logo: event.target.files[0] });

    if (event.target.files[0]) setIsLogoSubmitted(true);
  };

  const handleJoinCompany = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await CreateUserDetails(company, false, user);
      console.log(userResponse);
      try {
        const companyResponse = await AddUserToCompany(
          userResponse,
          company.id
        );
        console.log(companyResponse);
        navigate('/inventory');
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      alert('Could not join company.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Code to handle the submission of the new company form
    try {
      const response = await AddCompany(
        newCompany.name,
        newCompany.description,
        newCompany.email,
        newCompany.phone,
        newCompany.fax,
        newCompany.logo
      );
      console.log(response);
      try {
        const userResponse = await CreateUserDetails(response.id, true, user);
        console.log(userResponse);
        try {
          const companyResponse = await AddOwnerToCompany(
            userResponse,
            response.id
          );
          console.log(companyResponse);
          navigate('/inventory');
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        alert('Failed to Add user to company', error);
      }
    } catch (error) {
      console.log(error);
      alert('Failed to create company', error);
    }
  };
  const handleLogoClear = (event) => {
    event.preventDefault();
    if (hover) {
      setNewCompany({ ...newCompany, logo: null });
      setIsLogoSubmitted(false);
    }
  };

  return (
    <div>
      <div style={{ marginTop: 20 }}>
        <UserAndCompanyFormContainer
          width={390}
          backgroundColor={tokens.colors.background.secondary}
          borderRadius={15}
          // padding={10}
          createQuoteDropdown={
            <ScrollView height={'100%'} padding={5}>
              <Accordion
              // expanded={expanded === 'panel3'}
              // onChange={handlePanelChange('panel3')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>User Details</Typography>
                </AccordionSummary>
                <UserDetailsForm
                  width={'100%'}
                  overrides={{
                    FirstName: {
                      name: 'firstName',
                      value: userFormDetails.firstName,
                      onChange: handleUserDetailsChange,
                    },
                    LastName: {
                      name: 'lastName',
                      value: userFormDetails.lastName,
                      onChange: handleUserDetailsChange,
                    },
                    ContactEmail: {
                      name: 'contactEmail',
                      value: userFormDetails.contactEmail,
                      onChange: handleUserDetailsChange,
                    },
                  }}
                  contactPhone={
                    <div style={{ paddingBottom: 0 }}>
                      <Text fontSize={14}>Contact Phone</Text>
                      <PhoneInput
                        inputProps={{
                          name: 'phone',
                          required: true,
                          autoFocus: true,
                        }}
                        country={'us'}
                        value={userFormDetails.phone}
                        onChange={handleUserDetailsChange}
                        countryCodeEditable={false}
                        containerStyle={{
                          width: '100%',
                          marginTop: '6px',
                          marginBottom: '4px',
                        }}
                        inputStyle={{
                          paddingLeft: 60,
                          width: '100%',
                          height: '33px',
                          borderColor: tokens.colors.border.primary,
                          borderRadius: 4,
                        }}
                        buttonStyle={{
                          backgroundColor: tokens.colors.background.secondary,
                          borderColor: tokens.colors.border.primary,
                          paddingRight: 8,
                          paddingLeft: 8,
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  }
                />
              </Accordion>
              <Accordion
              // expanded={expanded === 'panel3'}
              // onChange={handlePanelChange('panel3')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Company Details</Typography>
                </AccordionSummary>
                <CompanyCreateJoinType
                  overrides={{
                    Badge37813150: {
                      onClick: () => {
                        setCompanyCreate(true);
                      },
                      style: {
                        cursor: 'pointer',
                        backgroundColor: companyCreate
                          ? tokens.colors.brand.primary[80]
                          : null,
                        color: companyCreate
                          ? tokens.colors.font.inverse.value
                          : null,
                      },
                    },
                    Badge37813152: {
                      onClick: () => {
                        setCompanyCreate(false);
                      },
                      style: {
                        cursor: 'pointer',
                        backgroundColor: !companyCreate
                          ? tokens.colors.brand.primary[80]
                          : null,
                        color: !companyCreate
                          ? tokens.colors.font.inverse.value
                          : null,
                      },
                    },
                  }}
                />
                {companyCreate ? (
                  <CompanyCreateDetails
                    width={'100%'}
                    overrides={{
                      CompanyName: {
                        id: 'name',
                        name: 'name',
                        value: newCompany.name,
                        onChange: handleNewCompanyChange,
                      },
                      Description: {
                        id: 'description',
                        name: 'description',
                        value: newCompany.description,
                        onChange: handleNewCompanyChange,
                      },
                      Email: {
                        id: 'email',
                        name: 'email',
                        value: newCompany.email,
                        onChange: handleNewCompanyChange,
                        // paddingBottom: 5,
                      },
                      Fax: {
                        id: 'fax',
                        name: 'fax',
                        value: newCompany.fax,
                        onChange: handleNewCompanyChange,
                      },
                    }}
                    contactPhone={
                      <div style={{ paddingBottom: 0 }}>
                        <Text fontSize={14}>Contact Phone</Text>
                        <PhoneInput
                          inputProps={{
                            name: 'phone',
                            required: true,
                            autoFocus: true,
                          }}
                          country={'us'}
                          value={newCompany.phone}
                          onChange={handlePhoneChange}
                          countryCodeEditable={false}
                          containerStyle={{
                            width: '100%',
                            marginTop: '6px',
                            marginBottom: '4px',
                          }}
                          inputStyle={{
                            paddingLeft: 60,
                            width: '100%',
                            borderColor: tokens.colors.border.primary,
                            height: '33px',
                            borderRadius: 4,
                          }}
                          buttonStyle={{
                            backgroundColor: tokens.colors.background.secondary,
                            borderColor: tokens.colors.border.primary,
                            paddingRight: 8,
                            borderRadius: 4,
                            paddingLeft: 8,
                          }}
                        />
                      </div>
                    }
                    logo={
                      <div>
                        <input
                          accept='image/*'
                          id='logo'
                          type='file'
                          name='logo'
                          onChange={handleLogoChange}
                          style={{ display: 'none' }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            alignContent: 'center',
                            marginTop: 5,
                          }}
                        >
                          <label htmlFor='logo'>
                            <Button
                              component='span'
                              variant='contained'
                              color='inherit'
                            >
                              Upload Logo
                            </Button>
                          </label>
                          {!isLogoSubmitted ? (
                            <CheckBoxOutlineBlankIcon
                              style={{ width: 40, height: 40, marginLeft: 6 }}
                              color='action'
                            />
                          ) : (
                            <div
                              onClick={handleLogoClear}
                              onMouseOver={(e) => {
                                e.preventDefault();
                                setHover(true);
                              }}
                              onMouseLeave={(e) => {
                                e.preventDefault();
                                setHover(false);
                              }}
                            >
                              {hover ? (
                                <DisabledByDefaultIcon
                                  style={{
                                    width: 40,
                                    height: 40,
                                    marginLeft: 6,
                                  }}
                                  color='action'
                                />
                              ) : (
                                <CheckBoxIcon
                                  style={{
                                    width: 40,
                                    height: 40,
                                    marginLeft: 6,
                                  }}
                                  color='action'
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    }
                  />
                ) : (
                  <CompanyJoinForm
                    overrides={{
                      SelectField: {
                        options: existingCompanies.map((c) => {
                          return c.companyName;
                        }),
                        value: company ? company.companyName : '',
                        onChange: (e) =>
                          setCompany(
                            e.target.value !== ''
                              ? existingCompanies.find(
                                  (c) => c.companyName === e.target.value
                                )
                              : null
                          ),
                      },
                    }}
                  />
                )}
              </Accordion>
            </ScrollView>
          }
        />
      </div>

      <div style={{ height: '800px' }}>
        <div style={styles.container}>
          <div>
            <div style={styles.existingCompanyText}>
              Join an existing company?
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 110,
              }}
            >
              <FormControl
                style={{ margin: 5, minWidth: 120, width: 150 }}
                variant='standard'
                fullWidth
              >
                <InputLabel id='company-select-label'>Company</InputLabel>
                <Select
                  labelId='company-select-label'
                  id='company-select'
                  value={company}
                  onChange={handleChange}
                >
                  {existingCompanies
                    ? existingCompanies.map((c) => {
                        return (
                          <MenuItem key={c.id} value={c.id}>
                            {c.companyName}
                          </MenuItem>
                        );
                      })
                    : null}
                </Select>
              </FormControl>
              <Button
                disabled={companySubmitButtonDisabled}
                onClick={handleJoinCompany}
              >
                Join Company
              </Button>
            </div>
          </div>
          <div>
            <div style={styles.newCompanyText}>Don't see your company?</div>
            <Button onClick={handleClickOpen} style={{ margin: 10 }}>
              Create New Company
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby='form-dialog-title'
            >
              <DialogTitle id='form-dialog-title'>
                Create New Company
              </DialogTitle>
              <DialogContent>
                <TextField
                  margin='dense'
                  id='name'
                  label='Company Name'
                  type='text'
                  fullWidth
                  name='name'
                  value={newCompany.name}
                  onChange={handleNewCompanyChange}
                  required
                />
                <TextField
                  margin='dense'
                  id='description'
                  label='Description'
                  type='text'
                  fullWidth
                  name='description'
                  value={newCompany.description}
                  onChange={handleNewCompanyChange}
                  required
                />

                <PhoneInput
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                  }}
                  country={'us'}
                  value={newCompany.phone}
                  onChange={handlePhoneChange}
                  countryCodeEditable={false}
                  containerStyle={{
                    width: '100%',
                    marginTop: '6px',
                    marginBottom: '4px',
                  }}
                  inputStyle={{
                    paddingLeft: 60,
                    width: '100%',
                    height: '55px',
                  }}
                  buttonStyle={{
                    backgroundColor: '#fff',
                    paddingRight: 8,
                    paddingLeft: 8,
                  }}
                />
                <TextField
                  margin='dense'
                  id='email'
                  label='Email'
                  type='email'
                  fullWidth
                  name='email'
                  value={newCompany.email}
                  onChange={handleNewCompanyChange}
                  required
                />
                <TextField
                  margin='dense'
                  id='fax'
                  label='Fax'
                  type='text'
                  fullWidth
                  name='fax'
                  value={newCompany.fax}
                  onChange={handleNewCompanyChange}
                />
                <input
                  accept='image/*'
                  id='logo'
                  type='file'
                  name='logo'
                  onChange={handleLogoChange}
                  style={{ display: 'none' }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignContent: 'center',
                    marginTop: 5,
                  }}
                >
                  <label htmlFor='logo'>
                    <Button component='span' variant='contained'>
                      Upload Logo
                    </Button>
                  </label>
                  {!isLogoSubmitted ? (
                    <CheckBoxOutlineBlankIcon
                      style={{ width: 40, height: 40, marginLeft: 6 }}
                      color='primary'
                    />
                  ) : (
                    <div
                      onClick={handleLogoClear}
                      onMouseOver={(e) => {
                        e.preventDefault();
                        setHover(true);
                      }}
                      onMouseLeave={(e) => {
                        e.preventDefault();
                        setHover(false);
                      }}
                    >
                      {hover ? (
                        <DisabledByDefaultIcon
                          style={{ width: 40, height: 40, marginLeft: 6 }}
                          color='primary'
                        />
                      ) : (
                        <CheckBoxIcon
                          style={{ width: 40, height: 40, marginLeft: 6 }}
                          color='primary'
                        />
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color='primary'>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} color='primary'>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '80vh',
    justifyContent: 'space-evenly',
  },
  existingCompanyText: {
    marginBottom: '10px',
    fontSize: 25,
  },
  newCompanyText: {
    fontSize: 25,
    marginTop: '20px',
    marginBottom: '10px',
  },
};
