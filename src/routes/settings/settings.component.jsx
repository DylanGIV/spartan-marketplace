import { Button } from '@aws-amplify/ui-react';
import { render } from '@react-email/render';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CustomerRfqEmail } from '../../components/customerRfqEmail/customerRfqEmail';
import { UserContext } from '../../context/user.context';
import {
  CreateCompanyItemsImportRequest,
  CreateCustomerRfqEmail,
  GetCompanyShippingAddresses,
  GetPartsByCompanySubscribe,
  GetRFQByCompany,
  PopulateCountries,
  SignOutAuth,
  UpdateCompanyFirstAddress,
} from '../../utils/utilsAmplify';

const Settings = () => {
  const [rfq, setRfq] = useState();
  const [rfqItems, setRfqItems] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const signOutHandler = async () => {
    try {
      await SignOutAuth();

      navigate('/');
    } catch (error) {
      alert('There was an error trying to sign out.');
    }
  };

  const { company, countries } = useContext(UserContext);

  const clickHandler = async () => {
    console.log(company.id);
    const response = await CreateCompanyItemsImportRequest(
      company.id,
      'BQYGU01_BATCHInventory_01_14_23_013250.csv',
      'firstTest'
    );
    console.log(response);
  };
  const handleEmailSend = async () => {
    const emailHtml = render(
      <CustomerRfqEmail rfqDetails={rfq} countries={countries} />
    );
    // await CreateCustomerRfqEmail(emailHtml, rfq.receivingCompany.contactEmail);
    await CreateCustomerRfqEmail(emailHtml, 'dylangiv123@gmail.com');
    console.log(emailHtml);
  };

  // useEffect(() => {
  //   const getRfq = async () => {
  //     const rAddress = await GetCompanyShippingAddresses(company);
  //     const sAddress = await GetCompanyShippingAddresses(company);
  //     const rfqs = await GetRFQByCompany(
  //       company.id,
  //       setRfqItems,
  //       0,
  //       0,
  //       'sent',
  //       null
  //     );
  //     setRfq({
  //       ...rfqs[0],
  //       sendingCompany: {
  //         ...company,
  //         companyOwner: company.CompanyOwner,
  //         address: rAddress[0],
  //       },
  //       receivingCompany: {
  //         ...company,
  //         companyOwner: company.CompanyOwner,
  //         address: sAddress[0],
  //       },
  //       Items: [
  //         {
  //           partNumber: 'BQYGU01',
  //           quantity: 1,
  //           altPartNumber: 'BQYGU01',
  //           description: 'BQYGU01',
  //           condition: 'NS',
  //         },
  //         {
  //           partNumber: 'BQYf201',
  //           quantity: 1,
  //           altPartNumber: 'Bf2GU01',
  //           description: 'BQYcas01',
  //           condition: 'NS',
  //         },
  //         {
  //           partNumber: 'BQYcewc',
  //           quantity: 1,
  //           altPartNumber: 'B2r3r21',
  //           description: 'cvnas01',
  //           condition: 'NS',
  //         },
  //       ],
  //     });
  //   };
  //   getRfq();
  // }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* <h1>Settings Page</h1>
      <Button onClick={() => PopulateCountries()}>
        Populate all Countries
      </Button>
      <Button onClick={clickHandler}>Create import request</Button>*/}
      <Button onClick={() => UpdateCompanyFirstAddress(company)}>
        Update Company Address
      </Button>
      <Button onClick={() => signOutHandler()}>SIGN OUT</Button>
      {/* <Button onClick={handleEmailSend}>Send test email</Button> */}
      {/* <div>
        {rfq ? (
          <CustomerRfqEmail rfqDetails={rfq} countries={countries} />
        ) : (
          <div>loading</div>
        )}
      </div> */}
    </div>
  );
};

export default Settings;
