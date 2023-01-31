import React, { useEffect, useState } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { DataStore } from 'aws-amplify';
import { AddCompany, CreateUserDetails } from '../../utils/utilsAmplify';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router';
import { Company } from '../../models';

export default function CompanySelector() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [isLogoSubmitted, setIsLogoSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [companySubmitButtonDisabled, setCompanySubmitButtonDisabled] =
    useState(true);

  const navigate = useNavigate();

  const [newCompany, setNewCompany] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    fax: '',
    logo: null,
  });

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
        const companies = await DataStore.query(Company);
        console.log(companies);
        setExistingCompanies(companies);
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

  const handlePhoneChange = (value) => {
    setNewCompany({ ...newCompany, phone: value });
  };

  const handleLogoChange = (event) => {
    setNewCompany({ ...newCompany, logo: event.target.files[0] });
    if (event.target.files[0]) setIsLogoSubmitted(true);
  };

  const handleJoinCompany = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await CreateUserDetails(company, false);
      console.log(userResponse);
      navigate('/');
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
        const userResponse = await CreateUserDetails(response.id, true);
        console.log(userResponse);
        navigate('/');
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
                {existingCompanies.map((c) => {
                  return (
                    <MenuItem key={c.id} value={c.id}>
                      {c.companyName}
                    </MenuItem>
                  );
                })}
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
            <DialogTitle id='form-dialog-title'>Create New Company</DialogTitle>
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
