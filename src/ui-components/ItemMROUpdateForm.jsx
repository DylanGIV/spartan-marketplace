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
import { ItemMRO } from "../models";
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
    nsn: "",
    partNumber: "",
    altPartNumber: "",
    description: "",
    quantity: "",
    price: "",
    certification: "",
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
  const [price, setPrice] = React.useState(initialValues.price);
  const [certification, setCertification] = React.useState(
    initialValues.certification
  );
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [imageUrls, setImageUrls] = React.useState(initialValues.imageUrls);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemMRORecord
      ? { ...initialValues, ...itemMRORecord }
      : initialValues;
    setNsn(cleanValues.nsn);
    setPartNumber(cleanValues.partNumber);
    setAltPartNumber(cleanValues.altPartNumber);
    setDescription(cleanValues.description);
    setQuantity(cleanValues.quantity);
    setPrice(cleanValues.price);
    setCertification(cleanValues.certification);
    setCompanyID(cleanValues.companyID);
    setImageUrls(cleanValues.imageUrls ?? []);
    setCurrentImageUrlsValue("");
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
  const [currentImageUrlsValue, setCurrentImageUrlsValue] = React.useState("");
  const imageUrlsRef = React.createRef();
  const validations = {
    nsn: [],
    partNumber: [],
    altPartNumber: [],
    description: [],
    quantity: [],
    price: [],
    certification: [],
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
          price,
          certification,
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
              price,
              certification,
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
              price,
              certification,
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
              price,
              certification,
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
              price,
              certification,
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
              price,
              certification,
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
              price: value,
              certification,
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
        label="Certification"
        isRequired={false}
        isReadOnly={false}
        value={certification}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nsn,
              partNumber,
              altPartNumber,
              description,
              quantity,
              price,
              certification: value,
              companyID,
              imageUrls,
            };
            const result = onChange(modelFields);
            value = result?.certification ?? value;
          }
          if (errors.certification?.hasError) {
            runValidationTasks("certification", value);
          }
          setCertification(value);
        }}
        onBlur={() => runValidationTasks("certification", certification)}
        errorMessage={errors.certification?.errorMessage}
        hasError={errors.certification?.hasError}
        {...getOverrideProps(overrides, "certification")}
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
              price,
              certification,
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
              price,
              certification,
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
