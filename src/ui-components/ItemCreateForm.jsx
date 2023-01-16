/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Item } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ItemCreateForm(props) {
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
    PartID: "",
    NSN: "",
    PartNumber: "",
    AltPartNumber: "",
    description: "",
    quantity: "",
    condition: "",
    imageUrl: "",
    control: "",
    price: "",
  };
  const [PartID, setPartID] = React.useState(initialValues.PartID);
  const [NSN, setNSN] = React.useState(initialValues.NSN);
  const [PartNumber, setPartNumber] = React.useState(initialValues.PartNumber);
  const [AltPartNumber, setAltPartNumber] = React.useState(
    initialValues.AltPartNumber
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [control, setControl] = React.useState(initialValues.control);
  const [price, setPrice] = React.useState(initialValues.price);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPartID(initialValues.PartID);
    setNSN(initialValues.NSN);
    setPartNumber(initialValues.PartNumber);
    setAltPartNumber(initialValues.AltPartNumber);
    setDescription(initialValues.description);
    setQuantity(initialValues.quantity);
    setCondition(initialValues.condition);
    setImageUrl(initialValues.imageUrl);
    setControl(initialValues.control);
    setPrice(initialValues.price);
    setErrors({});
  };
  const validations = {
    PartID: [],
    NSN: [],
    PartNumber: [],
    AltPartNumber: [],
    description: [],
    quantity: [],
    condition: [],
    imageUrl: [],
    control: [],
    price: [],
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
          PartID,
          NSN,
          PartNumber,
          AltPartNumber,
          description,
          quantity,
          condition,
          imageUrl,
          control,
          price,
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
          await DataStore.save(new Item(modelFields));
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
      {...getOverrideProps(overrides, "ItemCreateForm")}
      {...rest}
    >
      <TextField
        label="Part id"
        isRequired={false}
        isReadOnly={false}
        value={PartID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID: value,
              NSN,
              PartNumber,
              AltPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.PartID ?? value;
          }
          if (errors.PartID?.hasError) {
            runValidationTasks("PartID", value);
          }
          setPartID(value);
        }}
        onBlur={() => runValidationTasks("PartID", PartID)}
        errorMessage={errors.PartID?.errorMessage}
        hasError={errors.PartID?.hasError}
        {...getOverrideProps(overrides, "PartID")}
      ></TextField>
      <TextField
        label="Nsn"
        isRequired={false}
        isReadOnly={false}
        value={NSN}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN: value,
              PartNumber,
              AltPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.NSN ?? value;
          }
          if (errors.NSN?.hasError) {
            runValidationTasks("NSN", value);
          }
          setNSN(value);
        }}
        onBlur={() => runValidationTasks("NSN", NSN)}
        errorMessage={errors.NSN?.errorMessage}
        hasError={errors.NSN?.hasError}
        {...getOverrideProps(overrides, "NSN")}
      ></TextField>
      <TextField
        label="Part number"
        isRequired={false}
        isReadOnly={false}
        value={PartNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber: value,
              AltPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.PartNumber ?? value;
          }
          if (errors.PartNumber?.hasError) {
            runValidationTasks("PartNumber", value);
          }
          setPartNumber(value);
        }}
        onBlur={() => runValidationTasks("PartNumber", PartNumber)}
        errorMessage={errors.PartNumber?.errorMessage}
        hasError={errors.PartNumber?.hasError}
        {...getOverrideProps(overrides, "PartNumber")}
      ></TextField>
      <TextField
        label="Alt part number"
        isRequired={false}
        isReadOnly={false}
        value={AltPartNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber: value,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.AltPartNumber ?? value;
          }
          if (errors.AltPartNumber?.hasError) {
            runValidationTasks("AltPartNumber", value);
          }
          setAltPartNumber(value);
        }}
        onBlur={() => runValidationTasks("AltPartNumber", AltPartNumber)}
        errorMessage={errors.AltPartNumber?.errorMessage}
        hasError={errors.AltPartNumber?.hasError}
        {...getOverrideProps(overrides, "AltPartNumber")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber,
              description: value,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber,
              description,
              quantity: value,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Condition"
        isRequired={false}
        isReadOnly={false}
        value={condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber,
              description,
              quantity,
              condition: value,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.condition ?? value;
          }
          if (errors.condition?.hasError) {
            runValidationTasks("condition", value);
          }
          setCondition(value);
        }}
        onBlur={() => runValidationTasks("condition", condition)}
        errorMessage={errors.condition?.errorMessage}
        hasError={errors.condition?.hasError}
        {...getOverrideProps(overrides, "condition")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber,
              description,
              quantity,
              condition,
              imageUrl: value,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="Control"
        isRequired={false}
        isReadOnly={false}
        value={control}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control: value,
              price,
            };
            const result = onChange(modelFields);
            value = result?.control ?? value;
          }
          if (errors.control?.hasError) {
            runValidationTasks("control", value);
          }
          setControl(value);
        }}
        onBlur={() => runValidationTasks("control", control)}
        errorMessage={errors.control?.errorMessage}
        hasError={errors.control?.hasError}
        {...getOverrideProps(overrides, "control")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              PartID,
              NSN,
              PartNumber,
              AltPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price: value,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
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
