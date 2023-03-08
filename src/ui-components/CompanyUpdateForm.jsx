/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Company } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    profilePictureUrl: "",
    fax: "",
    cageCode: "",
    qualityCertifications: [],
    companyDescription: "",
  };
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [profilePictureUrl, setProfilePictureUrl] = React.useState(
    initialValues.profilePictureUrl
  );
  const [fax, setFax] = React.useState(initialValues.fax);
  const [cageCode, setCageCode] = React.useState(initialValues.cageCode);
  const [qualityCertifications, setQualityCertifications] = React.useState(
    initialValues.qualityCertifications
  );
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
    setProfilePictureUrl(cleanValues.profilePictureUrl);
    setFax(cleanValues.fax);
    setCageCode(cleanValues.cageCode);
    setQualityCertifications(cleanValues.qualityCertifications ?? []);
    setCurrentQualityCertificationsValue("");
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
  const [
    currentQualityCertificationsValue,
    setCurrentQualityCertificationsValue,
  ] = React.useState("");
  const qualityCertificationsRef = React.createRef();
  const validations = {
    companyName: [],
    phone: [{ type: "Phone" }],
    contactEmail: [{ type: "Email" }],
    profilePictureUrl: [],
    fax: [],
    cageCode: [],
    qualityCertifications: [],
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
          profilePictureUrl,
          fax,
          cageCode,
          qualityCertifications,
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
              profilePictureUrl,
              fax,
              cageCode,
              qualityCertifications,
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
              profilePictureUrl,
              fax,
              cageCode,
              qualityCertifications,
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
              profilePictureUrl,
              fax,
              cageCode,
              qualityCertifications,
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
              profilePictureUrl: value,
              fax,
              cageCode,
              qualityCertifications,
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
              profilePictureUrl,
              fax: value,
              cageCode,
              qualityCertifications,
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
        label="Cage code"
        isRequired={false}
        isReadOnly={false}
        value={cageCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail,
              profilePictureUrl,
              fax,
              cageCode: value,
              qualityCertifications,
              companyDescription,
            };
            const result = onChange(modelFields);
            value = result?.cageCode ?? value;
          }
          if (errors.cageCode?.hasError) {
            runValidationTasks("cageCode", value);
          }
          setCageCode(value);
        }}
        onBlur={() => runValidationTasks("cageCode", cageCode)}
        errorMessage={errors.cageCode?.errorMessage}
        hasError={errors.cageCode?.hasError}
        {...getOverrideProps(overrides, "cageCode")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              companyName,
              phone,
              contactEmail,
              profilePictureUrl,
              fax,
              cageCode,
              qualityCertifications: values,
              companyDescription,
            };
            const result = onChange(modelFields);
            values = result?.qualityCertifications ?? values;
          }
          setQualityCertifications(values);
          setCurrentQualityCertificationsValue("");
        }}
        currentFieldValue={currentQualityCertificationsValue}
        label={"Quality certifications"}
        items={qualityCertifications}
        hasError={errors.qualityCertifications?.hasError}
        setFieldValue={setCurrentQualityCertificationsValue}
        inputFieldRef={qualityCertificationsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Quality certifications"
          isRequired={false}
          isReadOnly={false}
          value={currentQualityCertificationsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.qualityCertifications?.hasError) {
              runValidationTasks("qualityCertifications", value);
            }
            setCurrentQualityCertificationsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "qualityCertifications",
              currentQualityCertificationsValue
            )
          }
          errorMessage={errors.qualityCertifications?.errorMessage}
          hasError={errors.qualityCertifications?.hasError}
          ref={qualityCertificationsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "qualityCertifications")}
        ></TextField>
      </ArrayField>
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
              profilePictureUrl,
              fax,
              cageCode,
              qualityCertifications,
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
