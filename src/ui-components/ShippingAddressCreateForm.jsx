/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ShippingAddress } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ShippingAddressCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    unitNumber: "",
    streetNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    regi: "",
    postalCode: "",
    countryName: "",
  };
  const [unitNumber, setUnitNumber] = React.useState(initialValues.unitNumber);
  const [streetNumber, setStreetNumber] = React.useState(
    initialValues.streetNumber
  );
  const [addressLine1, setAddressLine1] = React.useState(
    initialValues.addressLine1
  );
  const [addressLine2, setAddressLine2] = React.useState(
    initialValues.addressLine2
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [regi, setRegi] = React.useState(initialValues.regi);
  const [postalCode, setPostalCode] = React.useState(initialValues.postalCode);
  const [countryName, setCountryName] = React.useState(
    initialValues.countryName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUnitNumber(initialValues.unitNumber);
    setStreetNumber(initialValues.streetNumber);
    setAddressLine1(initialValues.addressLine1);
    setAddressLine2(initialValues.addressLine2);
    setCity(initialValues.city);
    setRegi(initialValues.regi);
    setPostalCode(initialValues.postalCode);
    setCountryName(initialValues.countryName);
    setErrors({});
  };
  const validations = {
    unitNumber: [],
    streetNumber: [],
    addressLine1: [],
    addressLine2: [],
    city: [],
    regi: [],
    postalCode: [],
    countryName: [],
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
          unitNumber,
          streetNumber,
          addressLine1,
          addressLine2,
          city,
          regi,
          postalCode,
          countryName,
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
          await DataStore.save(new ShippingAddress(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ShippingAddressCreateForm")}
      {...rest}
    >
      <TextField
        label="Unit number"
        isRequired={false}
        isReadOnly={false}
        value={unitNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber: value,
              streetNumber,
              addressLine1,
              addressLine2,
              city,
              regi,
              postalCode,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.unitNumber ?? value;
          }
          if (errors.unitNumber?.hasError) {
            runValidationTasks("unitNumber", value);
          }
          setUnitNumber(value);
        }}
        onBlur={() => runValidationTasks("unitNumber", unitNumber)}
        errorMessage={errors.unitNumber?.errorMessage}
        hasError={errors.unitNumber?.hasError}
        {...getOverrideProps(overrides, "unitNumber")}
      ></TextField>
      <TextField
        label="Street number"
        isRequired={false}
        isReadOnly={false}
        value={streetNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber: value,
              addressLine1,
              addressLine2,
              city,
              regi,
              postalCode,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.streetNumber ?? value;
          }
          if (errors.streetNumber?.hasError) {
            runValidationTasks("streetNumber", value);
          }
          setStreetNumber(value);
        }}
        onBlur={() => runValidationTasks("streetNumber", streetNumber)}
        errorMessage={errors.streetNumber?.errorMessage}
        hasError={errors.streetNumber?.hasError}
        {...getOverrideProps(overrides, "streetNumber")}
      ></TextField>
      <TextField
        label="Address line1"
        isRequired={false}
        isReadOnly={false}
        value={addressLine1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber,
              addressLine1: value,
              addressLine2,
              city,
              regi,
              postalCode,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.addressLine1 ?? value;
          }
          if (errors.addressLine1?.hasError) {
            runValidationTasks("addressLine1", value);
          }
          setAddressLine1(value);
        }}
        onBlur={() => runValidationTasks("addressLine1", addressLine1)}
        errorMessage={errors.addressLine1?.errorMessage}
        hasError={errors.addressLine1?.hasError}
        {...getOverrideProps(overrides, "addressLine1")}
      ></TextField>
      <TextField
        label="Address line2"
        isRequired={false}
        isReadOnly={false}
        value={addressLine2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber,
              addressLine1,
              addressLine2: value,
              city,
              regi,
              postalCode,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.addressLine2 ?? value;
          }
          if (errors.addressLine2?.hasError) {
            runValidationTasks("addressLine2", value);
          }
          setAddressLine2(value);
        }}
        onBlur={() => runValidationTasks("addressLine2", addressLine2)}
        errorMessage={errors.addressLine2?.errorMessage}
        hasError={errors.addressLine2?.hasError}
        {...getOverrideProps(overrides, "addressLine2")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber,
              addressLine1,
              addressLine2,
              city: value,
              regi,
              postalCode,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Regi"
        isRequired={false}
        isReadOnly={false}
        value={regi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber,
              addressLine1,
              addressLine2,
              city,
              regi: value,
              postalCode,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.regi ?? value;
          }
          if (errors.regi?.hasError) {
            runValidationTasks("regi", value);
          }
          setRegi(value);
        }}
        onBlur={() => runValidationTasks("regi", regi)}
        errorMessage={errors.regi?.errorMessage}
        hasError={errors.regi?.hasError}
        {...getOverrideProps(overrides, "regi")}
      ></TextField>
      <TextField
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postalCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber,
              addressLine1,
              addressLine2,
              city,
              regi,
              postalCode: value,
              countryName,
            };
            const result = onChange(modelFields);
            value = result?.postalCode ?? value;
          }
          if (errors.postalCode?.hasError) {
            runValidationTasks("postalCode", value);
          }
          setPostalCode(value);
        }}
        onBlur={() => runValidationTasks("postalCode", postalCode)}
        errorMessage={errors.postalCode?.errorMessage}
        hasError={errors.postalCode?.hasError}
        {...getOverrideProps(overrides, "postalCode")}
      ></TextField>
      <TextField
        label="Country name"
        isRequired={false}
        isReadOnly={false}
        value={countryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              unitNumber,
              streetNumber,
              addressLine1,
              addressLine2,
              city,
              regi,
              postalCode,
              countryName: value,
            };
            const result = onChange(modelFields);
            value = result?.countryName ?? value;
          }
          if (errors.countryName?.hasError) {
            runValidationTasks("countryName", value);
          }
          setCountryName(value);
        }}
        onBlur={() => runValidationTasks("countryName", countryName)}
        errorMessage={errors.countryName?.errorMessage}
        hasError={errors.countryName?.hasError}
        {...getOverrideProps(overrides, "countryName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
