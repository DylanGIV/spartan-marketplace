import React, { useContext, useEffect, useState } from 'react';
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
  DeleteAllCountries,
  GetCompanyByID,
  GetCountries,
  PopulateCountries,
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
import CheckIcon from '@mui/icons-material/Check';
import { UserContext } from '../../context/user.context';
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from 'libphonenumber-js/max';

export default function CompanyAndUserDetailsForm() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [isLogoSubmitted, setIsLogoSubmitted] = useState(false);
  const [company, setCompany] = useState(null);
  const [companyCode, setCompanyCode] = useState('');
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [companyCreate, setCompanyCreate] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);

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
    contactEmail: user.attributes.email,
    contactPhone: user.attributes.phone_number
      ? user.attributes.phone_number
      : '',
    phoneCountry: 'US',
  });

  const { tokens } = useTheme();

  const [existingCompanies, setExistingCompanies] = useState([]);

  // validate company code
  useEffect(() => {
    const checkForCompany = async () => {
      const tempCompany = await GetCompanyByID(companyCode);
      console.log(tempCompany);
      if (tempCompany) {
        setCompany(tempCompany);
      }
    };
    if (companyCode.length === 36) {
      checkForCompany();
    } else if (company) {
      setCompany(null);
    }
  }, [companyCode]);

  // get existing companies list
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

  // get countries list
  useEffect(() => {
    const getCountries = async () => {
      const countries = await GetCountries();
      setCountries(countries);
    };
    getCountries();
  }, []);

  useEffect(() => {
    if (countries && existingCompanies && user) {
      setExpanded('panel1');
    }
  }, [countries, existingCompanies, user]);
  // console.log(userFormDetails.contactPhone);
  // useEffect(() => {
  // console.log(isPossiblePhoneNumber(userFormDetails.contactPhone));
  // }, [userFormDetails]);
  // check if user can submit
  useEffect(() => {
    if (
      userFormDetails.contactEmail &&
      userFormDetails.contactPhone &&
      userFormDetails.firstName &&
      userFormDetails.lastName &&
      ((companyCreate &&
        newCompany.name &&
        newCompany.email &&
        newCompany.phone) ||
        company)
    ) {
      setCanSubmit(true);
    } else if (canSubmit) {
      setCanSubmit(false);
    }
  }, [userFormDetails, company, newCompany]);

  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  const handlePanelChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  // console.log(company.id);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Code to handle the submission of the new company form
    if (companyCreate) {
      try {
        const userResponse = await CreateUserDetails(
          // response.id,
          true,
          user,
          userFormDetails
        );
        console.log(userResponse);
        try {
          const response = await AddCompany(
            newCompany.name,
            newCompany.description,
            newCompany.email,
            newCompany.phone,
            newCompany.fax,
            newCompany.logo,
            selectedCountry
          );
          console.log(response);
          try {
            const companyResponse = await AddOwnerToCompany(
              userResponse,
              response.id
            );
            console.log(companyResponse);
            // navigate('/inventory');
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
          alert('Failed to create company, try submitting again', error);
        }
      } catch (error) {
        console.log(error);
        alert('Failed to create user', error);
      }
    } else {
      try {
        const userResponse = await CreateUserDetails(
          // company.id,
          false,
          user,
          userFormDetails
        );
        console.log(userResponse);
        try {
          const companyResponse = await AddUserToCompany(
            userResponse,
            company.id
          );
          console.log(companyResponse);
          // navigate('/inventory');
        } catch (error) {
          console.log(error);
          alert('Could not join company, try submitting again');
        }
      } catch (error) {
        console.log('Could not create user');
      }
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
    <div style={{ marginTop: 20, height: '100%', width: '100%' }}>
      <UserAndCompanyFormContainer
        left='50%'
        transform='translate(-50%, 0%)'
        width={390}
        backgroundColor={tokens.colors.background.secondary}
        borderRadius={15}
        overrides={{
          SubmitButton: {
            isDisabled: !canSubmit,
            onClick: handleSubmit,
          },
        }}
        // padding={10}
        createQuoteDropdown={
          <ScrollView height={'100%'} padding={5}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handlePanelChange('panel1')}
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
                  <div style={{ marginBottom: 0 }}>
                    <Text fontSize={14}>Contact Phone</Text>
                    <PhoneInput
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                      }}
                      country={'us'}
                      value={userFormDetails.contactPhone}
                      onChange={(value) => {
                        setUserFormDetails({
                          ...userFormDetails,
                          contactPhone: value,
                        });
                      }}
                      countryCodeEditable={false}
                      containerStyle={{
                        width: '100%',
                        marginTop: '2px',
                        // marginBottom: '4px',
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
              expanded={expanded === 'panel2'}
              onChange={handlePanelChange('panel2')}
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
                    CountrySelect: {
                      options: countries
                        ? countries.map((c) => {
                            return c.countryName;
                          })
                        : null,
                      value: selectedCountry ? selectedCountry.countryName : '',
                      onChange: (event) => {
                        console.log(event.target.value);
                        setSelectedCountry(
                          event.target.value === ''
                            ? null
                            : countries.find(
                                (c) => c.countryName === event.target.value
                              )
                        );
                      },
                      placeholder: 'Select Country',
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
                          marginTop: '2px',
                          // marginBottom: '4px',
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
                  width={'100%'}
                  overrides={{
                    TextField: {
                      placeholder: 'xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxx',
                      value: companyCode,
                      onChange: (e) => {
                        setCompanyCode(e.target.value);
                      },
                      maxLength: 36,
                      outerEndComponent: company ? (
                        <CheckIcon color='success' style={{ marginLeft: 5 }} />
                      ) : null,
                      errorMessage: 'Not Valid',
                      hasError: companyCode && !company,
                    },
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
                      isDisabled: companyCode,
                    },
                  }}
                />
              )}
            </Accordion>
          </ScrollView>
        }
      />
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
