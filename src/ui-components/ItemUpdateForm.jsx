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
import { Item } from "../models";
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
export default function ItemUpdateForm(props) {
  const {
    id: idProp,
    item,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nsn: "",
    partNumber: "",
    altPartNumber: "",
    description: "",
    quantity: "",
    condition: "",
    control: "",
    price: "",
    companyID: "",
    imageUrls: [],
  };
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
  const [control, setControl] = React.useState(initialValues.control);
  const [price, setPrice] = React.useState(initialValues.price);
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [imageUrls, setImageUrls] = React.useState(initialValues.imageUrls);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemRecord
      ? { ...initialValues, ...itemRecord }
      : initialValues;
    setNsn(cleanValues.nsn);
    setPartNumber(cleanValues.partNumber);
    setAltPartNumber(cleanValues.altPartNumber);
    setDescription(cleanValues.description);
    setQuantity(cleanValues.quantity);
    setCondition(cleanValues.condition);
    setControl(cleanValues.control);
    setPrice(cleanValues.price);
    setCompanyID(cleanValues.companyID);
    setImageUrls(cleanValues.imageUrls ?? []);
    setCurrentImageUrlsValue("");
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(item);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Item, idProp) : item;
      setItemRecord(record);
    };
    queryData();
  }, [idProp, item]);
  React.useEffect(resetStateValues, [itemRecord]);
  const [currentImageUrlsValue, setCurrentImageUrlsValue] = React.useState("");
  const imageUrlsRef = React.createRef();
  const validations = {
    nsn: [],
    partNumber: [],
    altPartNumber: [],
    description: [],
    quantity: [],
    condition: [],
    control: [],
    price: [],
    companyID: [{ type: "Required" }],
    imageUrls: [],
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
          nsn,
          partNumber,
          altPartNumber,
          description,
          quantity,
          condition,
          control,
          price,
          companyID,
          imageUrls,
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
            Item.copyOf(itemRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nsn"
        isRequired={false}
        isReadOnly={false}
        value={nsn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn: value,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              control,
              price,
              companyID,
              imageUrls,
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
              nsn,
              partNumber: value,
              altPartNumber,
              description,
              quantity,
              condition,
              control,
              price,
              companyID,
              imageUrls,
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
              nsn,
              partNumber,
              altPartNumber: value,
              description,
              quantity,
              condition,
              control,
              price,
              companyID,
              imageUrls,
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
              nsn,
              partNumber,
              altPartNumber,
              description: value,
              quantity,
              condition,
              control,
              price,
              companyID,
              imageUrls,
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
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity: value,
              condition,
              control,
              price,
              companyID,
              imageUrls,
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
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition: value,
              control,
              price,
              companyID,
              imageUrls,
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
        label="Control"
        isRequired={false}
        isReadOnly={false}
        value={control}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              control: value,
              price,
              companyID,
              imageUrls,
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
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              control,
              price: value,
              companyID,
              imageUrls,
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
      <TextField
        label="Company id"
        isRequired={true}
        isReadOnly={false}
        value={companyID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              control,
              price,
              companyID: value,
              imageUrls,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              condition,
              control,
              price,
              companyID,
              imageUrls: values,
            };
            const result = onChange(modelFields);
            values = result?.imageUrls ?? values;
          }
          setImageUrls(values);
          setCurrentImageUrlsValue("");
        }}
        currentFieldValue={currentImageUrlsValue}
        label={"Image urls"}
        items={imageUrls}
        hasError={errors.imageUrls?.hasError}
        setFieldValue={setCurrentImageUrlsValue}
        inputFieldRef={imageUrlsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Image urls"
          isRequired={false}
          isReadOnly={false}
          value={currentImageUrlsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.imageUrls?.hasError) {
              runValidationTasks("imageUrls", value);
            }
            setCurrentImageUrlsValue(value);
          }}
          onBlur={() => runValidationTasks("imageUrls", currentImageUrlsValue)}
          errorMessage={errors.imageUrls?.errorMessage}
          hasError={errors.imageUrls?.hasError}
          ref={imageUrlsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "imageUrls")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || item)}
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
              !(idProp || item) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
