/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UserDetails } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserDetailsUpdateForm(props) {
  const {
    userID: userIDProp,
    userDetails,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    firstName: "",
    lastName: "",
    contactEmail: "",
    contactPhone: "",
    isCompanyOwner: false,
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [isCompanyOwner, setIsCompanyOwner] = React.useState(
    initialValues.isCompanyOwner
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userDetailsRecord
      ? { ...initialValues, ...userDetailsRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setContactEmail(cleanValues.contactEmail);
    setContactPhone(cleanValues.contactPhone);
    setIsCompanyOwner(cleanValues.isCompanyOwner);
    setErrors({});
  };
  const [userDetailsRecord, setUserDetailsRecord] = React.useState(userDetails);
  React.useEffect(() => {
    const queryData = async () => {
      const record = userIDProp
        ? await DataStore.query(UserDetails, userIDProp)
        : userDetails;
      setUserDetailsRecord(record);
    };
    queryData();
  }, [userIDProp, userDetails]);
  React.useEffect(resetStateValues, [userDetailsRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    firstName: [],
    lastName: [],
    contactEmail: [{ type: "Email" }],
    contactPhone: [{ type: "Phone" }],
    isCompanyOwner: [],
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
          userID,
          firstName,
          lastName,
          contactEmail,
          contactPhone,
          isCompanyOwner,
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
            UserDetails.copyOf(userDetailsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserDetailsUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={true}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              firstName,
              lastName,
              contactEmail,
              contactPhone,
              isCompanyOwner,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName: value,
              lastName,
              contactEmail,
              contactPhone,
              isCompanyOwner,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName: value,
              contactEmail,
              contactPhone,
              isCompanyOwner,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
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
              userID,
              firstName,
              lastName,
              contactEmail: value,
              contactPhone,
              isCompanyOwner,
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
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              contactEmail,
              contactPhone: value,
              isCompanyOwner,
            };
            const result = onChange(modelFields);
            value = result?.contactPhone ?? value;
          }
          if (errors.contactPhone?.hasError) {
            runValidationTasks("contactPhone", value);
          }
          setContactPhone(value);
        }}
        onBlur={() => runValidationTasks("contactPhone", contactPhone)}
        errorMessage={errors.contactPhone?.errorMessage}
        hasError={errors.contactPhone?.hasError}
        {...getOverrideProps(overrides, "contactPhone")}
      ></TextField>
      <SwitchField
        label="Is company owner"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isCompanyOwner}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              contactEmail,
              contactPhone,
              isCompanyOwner: value,
            };
            const result = onChange(modelFields);
            value = result?.isCompanyOwner ?? value;
          }
          if (errors.isCompanyOwner?.hasError) {
            runValidationTasks("isCompanyOwner", value);
          }
          setIsCompanyOwner(value);
        }}
        onBlur={() => runValidationTasks("isCompanyOwner", isCompanyOwner)}
        errorMessage={errors.isCompanyOwner?.errorMessage}
        hasError={errors.isCompanyOwner?.hasError}
        {...getOverrideProps(overrides, "isCompanyOwner")}
      ></SwitchField>
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
          isDisabled={!(userIDProp || userDetails)}
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
              !(userIDProp || userDetails) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
