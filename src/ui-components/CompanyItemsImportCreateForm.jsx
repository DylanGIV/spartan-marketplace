/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CompanyItemsImport } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CompanyItemsImportCreateForm(props) {
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
    companyID: "",
    importName: "",
    importStatus: "",
    importProgress: "",
    importFileKey: "",
  };
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [importName, setImportName] = React.useState(initialValues.importName);
  const [importStatus, setImportStatus] = React.useState(
    initialValues.importStatus
  );
  const [importProgress, setImportProgress] = React.useState(
    initialValues.importProgress
  );
  const [importFileKey, setImportFileKey] = React.useState(
    initialValues.importFileKey
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCompanyID(initialValues.companyID);
    setImportName(initialValues.importName);
    setImportStatus(initialValues.importStatus);
    setImportProgress(initialValues.importProgress);
    setImportFileKey(initialValues.importFileKey);
    setErrors({});
  };
  const validations = {
    companyID: [{ type: "Required" }],
    importName: [],
    importStatus: [],
    importProgress: [],
    importFileKey: [],
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
          companyID,
          importName,
          importStatus,
          importProgress,
          importFileKey,
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
          await DataStore.save(new CompanyItemsImport(modelFields));
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
      {...getOverrideProps(overrides, "CompanyItemsImportCreateForm")}
      {...rest}
    >
      <TextField
        label="Company id"
        isRequired={true}
        isReadOnly={false}
        value={companyID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyID: value,
              importName,
              importStatus,
              importProgress,
              importFileKey,
            };
            const result = onChange(modelFields);
            value = result?.companyID ?? value;
          }
          if (errors.companyID?.hasError) {
            runValidationTasks("companyID", value);
          }
          setCompanyID(value);
        }}
        onBlur={() => runValidationTasks("companyID", companyID)}
        errorMessage={errors.companyID?.errorMessage}
        hasError={errors.companyID?.hasError}
        {...getOverrideProps(overrides, "companyID")}
      ></TextField>
      <TextField
        label="Import name"
        isRequired={false}
        isReadOnly={false}
        value={importName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyID,
              importName: value,
              importStatus,
              importProgress,
              importFileKey,
            };
            const result = onChange(modelFields);
            value = result?.importName ?? value;
          }
          if (errors.importName?.hasError) {
            runValidationTasks("importName", value);
          }
          setImportName(value);
        }}
        onBlur={() => runValidationTasks("importName", importName)}
        errorMessage={errors.importName?.errorMessage}
        hasError={errors.importName?.hasError}
        {...getOverrideProps(overrides, "importName")}
      ></TextField>
      <TextField
        label="Import status"
        isRequired={false}
        isReadOnly={false}
        value={importStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyID,
              importName,
              importStatus: value,
              importProgress,
              importFileKey,
            };
            const result = onChange(modelFields);
            value = result?.importStatus ?? value;
          }
          if (errors.importStatus?.hasError) {
            runValidationTasks("importStatus", value);
          }
          setImportStatus(value);
        }}
        onBlur={() => runValidationTasks("importStatus", importStatus)}
        errorMessage={errors.importStatus?.errorMessage}
        hasError={errors.importStatus?.hasError}
        {...getOverrideProps(overrides, "importStatus")}
      ></TextField>
      <TextField
        label="Import progress"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={importProgress}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              companyID,
              importName,
              importStatus,
              importProgress: value,
              importFileKey,
            };
            const result = onChange(modelFields);
            value = result?.importProgress ?? value;
          }
          if (errors.importProgress?.hasError) {
            runValidationTasks("importProgress", value);
          }
          setImportProgress(value);
        }}
        onBlur={() => runValidationTasks("importProgress", importProgress)}
        errorMessage={errors.importProgress?.errorMessage}
        hasError={errors.importProgress?.hasError}
        {...getOverrideProps(overrides, "importProgress")}
      ></TextField>
      <TextField
        label="Import file key"
        isRequired={false}
        isReadOnly={false}
        value={importFileKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyID,
              importName,
              importStatus,
              importProgress,
              importFileKey: value,
            };
            const result = onChange(modelFields);
            value = result?.importFileKey ?? value;
          }
          if (errors.importFileKey?.hasError) {
            runValidationTasks("importFileKey", value);
          }
          setImportFileKey(value);
        }}
        onBlur={() => runValidationTasks("importFileKey", importFileKey)}
        errorMessage={errors.importFileKey?.errorMessage}
        hasError={errors.importFileKey?.hasError}
        {...getOverrideProps(overrides, "importFileKey")}
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
