/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ItemMRO } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ItemMROUpdateForm(props) {
  const {
    id: idProp,
    itemMRO,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    partID: "",
    nsn: "",
    partNumber: "",
    altPartNumber: "",
    description: "",
    quantity: "",
    condition: "",
    imageUrl: "",
    control: "",
    price: "",
  };
  const [partID, setPartID] = React.useState(initialValues.partID);
  const [nsn, setNsn] = React.useState(initialValues.nsn);
  const [partNumber, setPartNumber] = React.useState(initialValues.partNumber);
  const [altPartNumber, setAltPartNumber] = React.useState(
    initialValues.altPartNumber
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
    const cleanValues = itemMRORecord
      ? { ...initialValues, ...itemMRORecord }
      : initialValues;
    setPartID(cleanValues.partID);
    setNsn(cleanValues.nsn);
    setPartNumber(cleanValues.partNumber);
    setAltPartNumber(cleanValues.altPartNumber);
    setDescription(cleanValues.description);
    setQuantity(cleanValues.quantity);
    setCondition(cleanValues.condition);
    setImageUrl(cleanValues.imageUrl);
    setControl(cleanValues.control);
    setPrice(cleanValues.price);
    setErrors({});
  };
  const [itemMRORecord, setItemMRORecord] = React.useState(itemMRO);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(ItemMRO, idProp) : itemMRO;
      setItemMRORecord(record);
    };
    queryData();
  }, [idProp, itemMRO]);
  React.useEffect(resetStateValues, [itemMRORecord]);
  const validations = {
    partID: [],
    nsn: [],
    partNumber: [],
    altPartNumber: [],
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
          partID,
          nsn,
          partNumber,
          altPartNumber,
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
          await DataStore.save(
            ItemMRO.copyOf(itemMRORecord, (updated) => {
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
      {...getOverrideProps(overrides, "ItemMROUpdateForm")}
      {...rest}
    >
      <TextField
        label="Part id"
        isRequired={false}
        isReadOnly={false}
        value={partID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partID: value,
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.partID ?? value;
          }
          if (errors.partID?.hasError) {
            runValidationTasks("partID", value);
          }
          setPartID(value);
        }}
        onBlur={() => runValidationTasks("partID", partID)}
        errorMessage={errors.partID?.errorMessage}
        hasError={errors.partID?.hasError}
        {...getOverrideProps(overrides, "partID")}
      ></TextField>
      <TextField
        label="Nsn"
        isRequired={false}
        isReadOnly={false}
        value={nsn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partID,
              nsn: value,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.nsn ?? value;
          }
          if (errors.nsn?.hasError) {
            runValidationTasks("nsn", value);
          }
          setNsn(value);
        }}
        onBlur={() => runValidationTasks("nsn", nsn)}
        errorMessage={errors.nsn?.errorMessage}
        hasError={errors.nsn?.hasError}
        {...getOverrideProps(overrides, "nsn")}
      ></TextField>
      <TextField
        label="Part number"
        isRequired={false}
        isReadOnly={false}
        value={partNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partID,
              nsn,
              partNumber: value,
              altPartNumber,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.partNumber ?? value;
          }
          if (errors.partNumber?.hasError) {
            runValidationTasks("partNumber", value);
          }
          setPartNumber(value);
        }}
        onBlur={() => runValidationTasks("partNumber", partNumber)}
        errorMessage={errors.partNumber?.errorMessage}
        hasError={errors.partNumber?.hasError}
        {...getOverrideProps(overrides, "partNumber")}
      ></TextField>
      <TextField
        label="Alt part number"
        isRequired={false}
        isReadOnly={false}
        value={altPartNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              partID,
              nsn,
              partNumber,
              altPartNumber: value,
              description,
              quantity,
              condition,
              imageUrl,
              control,
              price,
            };
            const result = onChange(modelFields);
            value = result?.altPartNumber ?? value;
          }
          if (errors.altPartNumber?.hasError) {
            runValidationTasks("altPartNumber", value);
          }
          setAltPartNumber(value);
        }}
        onBlur={() => runValidationTasks("altPartNumber", altPartNumber)}
        errorMessage={errors.altPartNumber?.errorMessage}
        hasError={errors.altPartNumber?.hasError}
        {...getOverrideProps(overrides, "altPartNumber")}
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
              partID,
              nsn,
              partNumber,
              altPartNumber,
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
              partID,
              nsn,
              partNumber,
              altPartNumber,
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
              partID,
              nsn,
              partNumber,
              altPartNumber,
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
              partID,
              nsn,
              partNumber,
              altPartNumber,
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
              partID,
              nsn,
              partNumber,
              altPartNumber,
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
              partID,
              nsn,
              partNumber,
              altPartNumber,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || itemMRO)}
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
              !(idProp || itemMRO) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
