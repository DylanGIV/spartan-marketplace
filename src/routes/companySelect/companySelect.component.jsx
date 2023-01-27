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
  Icon,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function CompanySelector() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [isLogoSubmitted, setIsLogoSubmitted] = useState(false);
  const [company, setCompany] = useState('');
  const [companySubmitButtonDisabled, setCompanySubmitButtonDisabled] =
    useState(true);

  const [newCompany, setNewCompany] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    fax: '',
    logo: null,
  });

  useEffect(() => {
    if (company) {
      setCompanySubmitButtonDisabled(false);
    } else {
      setCompanySubmitButtonDisabled(true);
    }
  }, [company]);

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

  const handleLogoChange = (event) => {
    setNewCompany({ ...newCompany, logo: event.target.files[0] });
    if (event.target.files[0]) setIsLogoSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle the submission of the new company form
  };
  const handleLogoClear = (event) => {
    event.preventDefault();
    if (hover) {
      setNewCompany({ ...newCompany, logo: null });
      setIsLogoSubmitted(false);
    }
  };

  const existingCompany = [
    {
      id: 4,
      name: 'abcefd',
    },
    {
      id: 1,
      name: 'fdsafwe',
    },
    {
      id: 2,
      name: 'vcxzva',
    },
    {
      id: 3,
      name: 'fgweagas',
    },
  ];

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
                {/* Code to fetch and map the existing companies here */}
                {existingCompany.map((c) => {
                  return <MenuItem value={c.id}>{c.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <Button disabled={companySubmitButtonDisabled}>Join Company</Button>
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
              <TextField
                margin='dense'
                id='phone'
                label='Phone'
                type='tel'
                fullWidth
                name='phone'
                value={newCompany.phone}
                onChange={handleNewCompanyChange}
                required
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
