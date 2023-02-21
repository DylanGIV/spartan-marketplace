/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Company } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CompanyUpdateForm(props) {
  const {
    id: idProp,
    company,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    companyName: "",
    phone: "",
    contactEmail: "",
    countryID: "",
    profilePictureUrl: "",
    fax: "",
    companyDescription: "",
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [countryID, setCountryID] = React.useState(initialValues.countryID);
  const [profilePictureUrl, setProfilePictureUrl] = React.useState(
    initialValues.profilePictureUrl
  );
  const [fax, setFax] = React.useState(initialValues.fax);
  const [companyDescription, setCompanyDescription] = React.useState(
    initialValues.companyDescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyRecord
      ? { ...initialValues, ...companyRecord }
      : initialValues;
    setCompanyName(cleanValues.companyName);
    setPhone(cleanValues.phone);
    setContactEmail(cleanValues.contactEmail);
    setCountryID(cleanValues.countryID);
    setProfilePictureUrl(cleanValues.profilePictureUrl);
    setFax(cleanValues.fax);
    setCompanyDescription(cleanValues.companyDescription);
    setErrors({});
  };
  const [companyRecord, setCompanyRecord] = React.useState(company);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Company, idProp) : company;
      setCompanyRecord(record);
    };
    queryData();
  }, [idProp, company]);
  React.useEffect(resetStateValues, [companyRecord]);
  const validations = {
    companyName: [],
    phone: [{ type: "Phone" }],
    contactEmail: [{ type: "Email" }],
    countryID: [{ type: "Required" }],
    profilePictureUrl: [],
    fax: [],
    companyDescription: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          companyName,
          phone,
          contactEmail,
          countryID,
          profilePictureUrl,
          fax,
          companyDescription,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Company.copyOf(companyRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CompanyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName: value,
              phone,
              contactEmail,
              countryID,
              profilePictureUrl,
              fax,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone: value,
              contactEmail,
              countryID,
              profilePictureUrl,
              fax,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail: value,
              countryID,
              profilePictureUrl,
              fax,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.contactEmail ?? value;
          }
          if (errors.contactEmail?.hasError) {
            runValidationTasks("contactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("contactEmail", contactEmail)}
        errorMessage={errors.contactEmail?.errorMessage}
        hasError={errors.contactEmail?.hasError}
        {...getOverrideProps(overrides, "contactEmail")}
      ></TextField>
      <TextField
        label="Country id"
        isRequired={true}
        isReadOnly={false}
        value={countryID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail,
              countryID: value,
              profilePictureUrl,
              fax,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.countryID ?? value;
          }
          if (errors.countryID?.hasError) {
            runValidationTasks("countryID", value);
          }
          setCountryID(value);
        }}
        onBlur={() => runValidationTasks("countryID", countryID)}
        errorMessage={errors.countryID?.errorMessage}
        hasError={errors.countryID?.hasError}
        {...getOverrideProps(overrides, "countryID")}
      ></TextField>
      <TextField
        label="Profile picture url"
        isRequired={false}
        isReadOnly={false}
        value={profilePictureUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail,
              countryID,
              profilePictureUrl: value,
              fax,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.profilePictureUrl ?? value;
          }
          if (errors.profilePictureUrl?.hasError) {
            runValidationTasks("profilePictureUrl", value);
          }
          setProfilePictureUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("profilePictureUrl", profilePictureUrl)
        }
        errorMessage={errors.profilePictureUrl?.errorMessage}
        hasError={errors.profilePictureUrl?.hasError}
        {...getOverrideProps(overrides, "profilePictureUrl")}
      ></TextField>
      <TextField
        label="Fax"
        isRequired={false}
        isReadOnly={false}
        value={fax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail,
              countryID,
              profilePictureUrl,
              fax: value,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.fax ?? value;
          }
          if (errors.fax?.hasError) {
            runValidationTasks("fax", value);
          }
          setFax(value);
        }}
        onBlur={() => runValidationTasks("fax", fax)}
        errorMessage={errors.fax?.errorMessage}
        hasError={errors.fax?.hasError}
        {...getOverrideProps(overrides, "fax")}
      ></TextField>
      <TextField
        label="Company description"
        isRequired={false}
        isReadOnly={false}
        value={companyDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail,
              countryID,
              profilePictureUrl,
              fax,
              companyDescription: value,
            };
            const result = onChange(modelFields);
            value = result?.companyDescription ?? value;
          }
          if (errors.companyDescription?.hasError) {
            runValidationTasks("companyDescription", value);
          }
          setCompanyDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("companyDescription", companyDescription)
        }
        errorMessage={errors.companyDescription?.errorMessage}
        hasError={errors.companyDescription?.hasError}
        {...getOverrideProps(overrides, "companyDescription")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || company)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || company) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
