import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@aws-amplify/ui-react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Section,
  Hr,
} from '@react-email/components';
import * as React from 'react';

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : '';

export const CustomerRfqEmail = ({ rfqDetails, countries }) => {
  const { tokens } = useTheme();

  return (
    // <Html>
    <div>
      {/* <Head /> */}
      <Preview>- {rfqDetails.rfqNumber}</Preview>
      <div style={main}>
        <Container style={container}>
          {/* Address and company details section */}
          <Section>
            <Heading>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  height: '50px',
                  fontWeight: 'lighter',
                  marginBottom: 20,
                }}
              >
                <img src='https://spartan-systems-marketplace-storage25017-staging.s3.us-west-2.amazonaws.com/public/email/SpartanLogo.jpeg' />
                <Text
                  style={{ alignSelf: 'center', fontSize: 30, marginLeft: 10 }}
                >
                  Spartan Marketplace
                </Text>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '50px',
                }}
              >
                <h4
                  style={{
                    color: '#047D95',
                    fontWeight: 'lighter',
                    alignSelf: 'center',
                    marginBottom: 10,
                  }}
                >
                  Request For Quote
                </h4>
              </div>
            </Heading>
            <Hr />

            <div
              style={{
                display: 'flex',
                // justifyContent: 'space-between',
                flexDirection: 'column',
                width: '600px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingRight: 10,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                  }}
                >
                  <h3 style={{ color: '#047D95' }}>To:</h3>
                  <Hr />
                  <p>
                    {rfqDetails.receivingCompany.companyName} <br />
                    {rfqDetails.receivingCompany.companyOwner.firstName +
                      ' ' +
                      rfqDetails.receivingCompany.companyOwner.lastName}{' '}
                    <br />
                    {rfqDetails.receivingCompany.address.addressLine1} <br />
                    {rfqDetails.receivingCompany.address.city},{' '}
                    {rfqDetails.receivingCompany.address.regi}{' '}
                    {rfqDetails.receivingCompany.address.postalCode} <br />
                    {
                      countries.find(
                        (country) =>
                          country.code === rfqDetails.receivingCompany.countryID
                      ).countryName
                    }{' '}
                    <br />
                    Phone: {rfqDetails.receivingCompany.phone} <br />
                    Fax: {rfqDetails.receivingCompany.fax} <br />
                    Email: {rfqDetails.receivingCompany.contactEmail}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',

                    // marginLeft: 80,
                  }}
                >
                  <h3 style={{ color: '#047D95' }}>Quote Details:</h3>
                  <Hr />
                  <p>
                    Quote Number: <br />
                    {rfqDetails.rfqNumber}
                  </p>
                  <h4>
                    Quote Date: {new Date(rfqDetails.dateSent).toString()}
                    <br />
                    Expiration Date:{' '}
                    {rfqDetails.dueDate
                      ? new Date(rfqDetails.dueDate).toString()
                      : 'N/A'}
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                  }}
                >
                  <h3 style={{ color: '#047D95' }}>From:</h3>
                  <Hr />
                  <p>
                    {rfqDetails.sendingCompany.companyName} <br />
                    {rfqDetails.sendingCompany.companyOwner.firstName +
                      ' ' +
                      rfqDetails.sendingCompany.companyOwner.lastName}{' '}
                    <br />
                    {rfqDetails.sendingCompany.address.addressLine1} <br />
                    {rfqDetails.sendingCompany.address.city},{' '}
                    {rfqDetails.sendingCompany.address.regi}{' '}
                    {rfqDetails.sendingCompany.address.postalCode} <br />
                    {
                      countries.find(
                        (country) =>
                          country.code === rfqDetails.sendingCompany.countryID
                      ).countryName
                    }{' '}
                    <br />
                    Phone: {rfqDetails.sendingCompany.phone} <br />
                    Fax: {rfqDetails.sendingCompany.fax} <br />
                    Email: {rfqDetails.sendingCompany.contactEmail}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                  }}
                >
                  <h3 style={{ color: '#047D95' }}>Deliver to:</h3>
                  <Hr />

                  <p>
                    {rfqDetails.receivingCompany.companyName} <br />
                    {rfqDetails.addressLine1} <br />
                    {rfqDetails.city}, {rfqDetails.state} {rfqDetails.zip}{' '}
                    <br />
                    {rfqDetails.country}
                  </p>
                </div>
              </div>
            </div>
          </Section>
          <Hr />
          <Section>
            <span>
              <Text
                style={{
                  color: '#047D95',
                  fontSize: '18px',
                }}
              >
                Comments From Buyer:
              </Text>
              <Text>{'Hello'}</Text>
            </span>
          </Section>
          <Hr />
          <Section>
            <h3
              style={{
                color: '#047D95',
              }}
            >
              Quote Details
            </h3>
            <table
              size='small'
              variation='striped'
              border='1px solid black'
              cellPadding={10}
              width='100%'
            >
              {/* <th> */}
              <thead>
                <tr>
                  <th style={{ color: '#047D95' }}>
                    Part Number <br />
                    Alternate Part Number
                  </th>
                  <th style={{ color: '#047D95' }}>Description</th>
                  <th style={{ color: '#047D95' }}>Condition</th>
                  <th style={{ color: '#047D95' }}>
                    Requested <br />
                    Quantity
                  </th>
                </tr>
              </thead>
              {/* </th> */}
              <tbody>
                {rfqDetails.Items.map((item, i) => (
                  <tr key={i}>
                    <td>
                      {item.partNumber} <br />
                      {item.altPartNumber}
                    </td>
                    <td>{item.description}</td>
                    <td>{item.condition}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>
          <Text style={footer}>
            <Link
              href='https://spartanmarketplace.com'
              target='_blank'
              style={{ ...link, color: '#898989' }}
            >
              Spartan Marketplace
            </Link>
            , the best place to organize your team and work smarter.
          </Text>{' '}
        </Container>
      </div>
    </div>
    // </Html>
  );
};

export default CustomerRfqEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

// const code = {
//   display: 'inline-block',
//   padding: '16px 4.5%',
//   width: '90.5%',
//   backgroundColor: '#f4f4f4',
//   borderRadius: '5px',
//   border: '1px solid #eee',
//   color: '#333',
// };
