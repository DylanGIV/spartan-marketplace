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
import { RFQ } from "../models";
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
export default function RFQCreateForm(props) {
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
    quotationNumber: "",
    dateSent: "",
    custRefNum: "",
    companyName: "",
    contact: "",
    phone: "",
    email: "",
    shippingTerms: "",
    shippingMethod: "",
    leadTime: "",
    paymentTerms: "",
    dueDate: "",
    quantityRequested: "",
    quantityQuoted: "",
    nsn: "",
    partNumber: "",
    altPartNumber: "",
    condition: "",
    uom: "",
    description: "",
    price: "",
    discount: "",
    attr1: "",
    attr2: "",
    attr3: "",
    lineTotal: "",
    subtotal: "",
    salesTax: "",
    total: "",
    internalComments: "",
    emailComments: "",
    attr4: "",
    attr5: "",
    attr6: "",
    imageUrls: [],
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  };
  const [quotationNumber, setQuotationNumber] = React.useState(
    initialValues.quotationNumber
  );
  const [dateSent, setDateSent] = React.useState(initialValues.dateSent);
  const [custRefNum, setCustRefNum] = React.useState(initialValues.custRefNum);
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [contact, setContact] = React.useState(initialValues.contact);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [shippingTerms, setShippingTerms] = React.useState(
    initialValues.shippingTerms
  );
  const [shippingMethod, setShippingMethod] = React.useState(
    initialValues.shippingMethod
  );
  const [leadTime, setLeadTime] = React.useState(initialValues.leadTime);
  const [paymentTerms, setPaymentTerms] = React.useState(
    initialValues.paymentTerms
  );
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const [quantityRequested, setQuantityRequested] = React.useState(
    initialValues.quantityRequested
  );
  const [quantityQuoted, setQuantityQuoted] = React.useState(
    initialValues.quantityQuoted
  );
  const [nsn, setNsn] = React.useState(initialValues.nsn);
  const [partNumber, setPartNumber] = React.useState(initialValues.partNumber);
  const [altPartNumber, setAltPartNumber] = React.useState(
    initialValues.altPartNumber
  );
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [uom, setUom] = React.useState(initialValues.uom);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [discount, setDiscount] = React.useState(initialValues.discount);
  const [attr1, setAttr1] = React.useState(initialValues.attr1);
  const [attr2, setAttr2] = React.useState(initialValues.attr2);
  const [attr3, setAttr3] = React.useState(initialValues.attr3);
  const [lineTotal, setLineTotal] = React.useState(initialValues.lineTotal);
  const [subtotal, setSubtotal] = React.useState(initialValues.subtotal);
  const [salesTax, setSalesTax] = React.useState(initialValues.salesTax);
  const [total, setTotal] = React.useState(initialValues.total);
  const [internalComments, setInternalComments] = React.useState(
    initialValues.internalComments
  );
  const [emailComments, setEmailComments] = React.useState(
    initialValues.emailComments
  );
  const [attr4, setAttr4] = React.useState(initialValues.attr4);
  const [attr5, setAttr5] = React.useState(initialValues.attr5);
  const [attr6, setAttr6] = React.useState(initialValues.attr6);
  const [imageUrls, setImageUrls] = React.useState(initialValues.imageUrls);
  const [addressLine1, setAddressLine1] = React.useState(
    initialValues.addressLine1
  );
  const [addressLine2, setAddressLine2] = React.useState(
    initialValues.addressLine2
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [country, setCountry] = React.useState(initialValues.country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setQuotationNumber(initialValues.quotationNumber);
    setDateSent(initialValues.dateSent);
    setCustRefNum(initialValues.custRefNum);
    setCompanyName(initialValues.companyName);
    setContact(initialValues.contact);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setShippingTerms(initialValues.shippingTerms);
    setShippingMethod(initialValues.shippingMethod);
    setLeadTime(initialValues.leadTime);
    setPaymentTerms(initialValues.paymentTerms);
    setDueDate(initialValues.dueDate);
    setQuantityRequested(initialValues.quantityRequested);
    setQuantityQuoted(initialValues.quantityQuoted);
    setNsn(initialValues.nsn);
    setPartNumber(initialValues.partNumber);
    setAltPartNumber(initialValues.altPartNumber);
    setCondition(initialValues.condition);
    setUom(initialValues.uom);
    setDescription(initialValues.description);
    setPrice(initialValues.price);
    setDiscount(initialValues.discount);
    setAttr1(initialValues.attr1);
    setAttr2(initialValues.attr2);
    setAttr3(initialValues.attr3);
    setLineTotal(initialValues.lineTotal);
    setSubtotal(initialValues.subtotal);
    setSalesTax(initialValues.salesTax);
    setTotal(initialValues.total);
    setInternalComments(initialValues.internalComments);
    setEmailComments(initialValues.emailComments);
    setAttr4(initialValues.attr4);
    setAttr5(initialValues.attr5);
    setAttr6(initialValues.attr6);
    setImageUrls(initialValues.imageUrls);
    setCurrentImageUrlsValue("");
    setAddressLine1(initialValues.addressLine1);
    setAddressLine2(initialValues.addressLine2);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZip(initialValues.zip);
    setCountry(initialValues.country);
    setErrors({});
  };
  const [currentImageUrlsValue, setCurrentImageUrlsValue] = React.useState("");
  const imageUrlsRef = React.createRef();
  const validations = {
    quotationNumber: [],
    dateSent: [],
    custRefNum: [],
    companyName: [],
    contact: [],
    phone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    shippingTerms: [],
    shippingMethod: [],
    leadTime: [],
    paymentTerms: [],
    dueDate: [],
    quantityRequested: [],
    quantityQuoted: [],
    nsn: [],
    partNumber: [],
    altPartNumber: [],
    condition: [],
    uom: [],
    description: [],
    price: [],
    discount: [],
    attr1: [],
    attr2: [],
    attr3: [],
    lineTotal: [],
    subtotal: [],
    salesTax: [],
    total: [],
    internalComments: [],
    emailComments: [],
    attr4: [],
    attr5: [],
    attr6: [],
    imageUrls: [],
    addressLine1: [],
    addressLine2: [],
    city: [],
    state: [],
    zip: [],
    country: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          quotationNumber,
          dateSent,
          custRefNum,
          companyName,
          contact,
          phone,
          email,
          shippingTerms,
          shippingMethod,
          leadTime,
          paymentTerms,
          dueDate,
          quantityRequested,
          quantityQuoted,
          nsn,
          partNumber,
          altPartNumber,
          condition,
          uom,
          description,
          price,
          discount,
          attr1,
          attr2,
          attr3,
          lineTotal,
          subtotal,
          salesTax,
          total,
          internalComments,
          emailComments,
          attr4,
          attr5,
          attr6,
          imageUrls,
          addressLine1,
          addressLine2,
          city,
          state,
          zip,
          country,
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
          await DataStore.save(new RFQ(modelFields));
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
      {...getOverrideProps(overrides, "RFQCreateForm")}
      {...rest}
    >
      <TextField
        label="Quotation number"
        isRequired={false}
        isReadOnly={false}
        value={quotationNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber: value,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.quotationNumber ?? value;
          }
          if (errors.quotationNumber?.hasError) {
            runValidationTasks("quotationNumber", value);
          }
          setQuotationNumber(value);
        }}
        onBlur={() => runValidationTasks("quotationNumber", quotationNumber)}
        errorMessage={errors.quotationNumber?.errorMessage}
        hasError={errors.quotationNumber?.hasError}
        {...getOverrideProps(overrides, "quotationNumber")}
      ></TextField>
      <TextField
        label="Date sent"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={dateSent && convertToLocal(new Date(dateSent))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent: value,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.dateSent ?? value;
          }
          if (errors.dateSent?.hasError) {
            runValidationTasks("dateSent", value);
          }
          setDateSent(value);
        }}
        onBlur={() => runValidationTasks("dateSent", dateSent)}
        errorMessage={errors.dateSent?.errorMessage}
        hasError={errors.dateSent?.hasError}
        {...getOverrideProps(overrides, "dateSent")}
      ></TextField>
      <TextField
        label="Cust ref num"
        isRequired={false}
        isReadOnly={false}
        value={custRefNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum: value,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.custRefNum ?? value;
          }
          if (errors.custRefNum?.hasError) {
            runValidationTasks("custRefNum", value);
          }
          setCustRefNum(value);
        }}
        onBlur={() => runValidationTasks("custRefNum", custRefNum)}
        errorMessage={errors.custRefNum?.errorMessage}
        hasError={errors.custRefNum?.hasError}
        {...getOverrideProps(overrides, "custRefNum")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName: value,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
        label="Contact"
        isRequired={false}
        isReadOnly={false}
        value={contact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact: value,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.contact ?? value;
          }
          if (errors.contact?.hasError) {
            runValidationTasks("contact", value);
          }
          setContact(value);
        }}
        onBlur={() => runValidationTasks("contact", contact)}
        errorMessage={errors.contact?.errorMessage}
        hasError={errors.contact?.hasError}
        {...getOverrideProps(overrides, "contact")}
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone: value,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email: value,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Shipping terms"
        isRequired={false}
        isReadOnly={false}
        value={shippingTerms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms: value,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.shippingTerms ?? value;
          }
          if (errors.shippingTerms?.hasError) {
            runValidationTasks("shippingTerms", value);
          }
          setShippingTerms(value);
        }}
        onBlur={() => runValidationTasks("shippingTerms", shippingTerms)}
        errorMessage={errors.shippingTerms?.errorMessage}
        hasError={errors.shippingTerms?.hasError}
        {...getOverrideProps(overrides, "shippingTerms")}
      ></TextField>
      <TextField
        label="Shipping method"
        isRequired={false}
        isReadOnly={false}
        value={shippingMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod: value,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.shippingMethod ?? value;
          }
          if (errors.shippingMethod?.hasError) {
            runValidationTasks("shippingMethod", value);
          }
          setShippingMethod(value);
        }}
        onBlur={() => runValidationTasks("shippingMethod", shippingMethod)}
        errorMessage={errors.shippingMethod?.errorMessage}
        hasError={errors.shippingMethod?.hasError}
        {...getOverrideProps(overrides, "shippingMethod")}
      ></TextField>
      <TextField
        label="Lead time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={leadTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime: value,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.leadTime ?? value;
          }
          if (errors.leadTime?.hasError) {
            runValidationTasks("leadTime", value);
          }
          setLeadTime(value);
        }}
        onBlur={() => runValidationTasks("leadTime", leadTime)}
        errorMessage={errors.leadTime?.errorMessage}
        hasError={errors.leadTime?.hasError}
        {...getOverrideProps(overrides, "leadTime")}
      ></TextField>
      <TextField
        label="Payment terms"
        isRequired={false}
        isReadOnly={false}
        value={paymentTerms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms: value,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.paymentTerms ?? value;
          }
          if (errors.paymentTerms?.hasError) {
            runValidationTasks("paymentTerms", value);
          }
          setPaymentTerms(value);
        }}
        onBlur={() => runValidationTasks("paymentTerms", paymentTerms)}
        errorMessage={errors.paymentTerms?.errorMessage}
        hasError={errors.paymentTerms?.hasError}
        {...getOverrideProps(overrides, "paymentTerms")}
      ></TextField>
      <TextField
        label="Due date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={dueDate && convertToLocal(new Date(dueDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate: value,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.dueDate ?? value;
          }
          if (errors.dueDate?.hasError) {
            runValidationTasks("dueDate", value);
          }
          setDueDate(value);
        }}
        onBlur={() => runValidationTasks("dueDate", dueDate)}
        errorMessage={errors.dueDate?.errorMessage}
        hasError={errors.dueDate?.hasError}
        {...getOverrideProps(overrides, "dueDate")}
      ></TextField>
      <TextField
        label="Quantity requested"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantityRequested}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested: value,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.quantityRequested ?? value;
          }
          if (errors.quantityRequested?.hasError) {
            runValidationTasks("quantityRequested", value);
          }
          setQuantityRequested(value);
        }}
        onBlur={() =>
          runValidationTasks("quantityRequested", quantityRequested)
        }
        errorMessage={errors.quantityRequested?.errorMessage}
        hasError={errors.quantityRequested?.hasError}
        {...getOverrideProps(overrides, "quantityRequested")}
      ></TextField>
      <TextField
        label="Quantity quoted"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantityQuoted}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted: value,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.quantityQuoted ?? value;
          }
          if (errors.quantityQuoted?.hasError) {
            runValidationTasks("quantityQuoted", value);
          }
          setQuantityQuoted(value);
        }}
        onBlur={() => runValidationTasks("quantityQuoted", quantityQuoted)}
        errorMessage={errors.quantityQuoted?.errorMessage}
        hasError={errors.quantityQuoted?.hasError}
        {...getOverrideProps(overrides, "quantityQuoted")}
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn: value,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber: value,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber: value,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
        label="Condition"
        isRequired={false}
        isReadOnly={false}
        value={condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition: value,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
        label="Uom"
        isRequired={false}
        isReadOnly={false}
        value={uom}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom: value,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.uom ?? value;
          }
          if (errors.uom?.hasError) {
            runValidationTasks("uom", value);
          }
          setUom(value);
        }}
        onBlur={() => runValidationTasks("uom", uom)}
        errorMessage={errors.uom?.errorMessage}
        hasError={errors.uom?.hasError}
        {...getOverrideProps(overrides, "uom")}
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description: value,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price: value,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
        label="Discount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={discount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount: value,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.discount ?? value;
          }
          if (errors.discount?.hasError) {
            runValidationTasks("discount", value);
          }
          setDiscount(value);
        }}
        onBlur={() => runValidationTasks("discount", discount)}
        errorMessage={errors.discount?.errorMessage}
        hasError={errors.discount?.hasError}
        {...getOverrideProps(overrides, "discount")}
      ></TextField>
      <TextField
        label="Attr1"
        isRequired={false}
        isReadOnly={false}
        value={attr1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1: value,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.attr1 ?? value;
          }
          if (errors.attr1?.hasError) {
            runValidationTasks("attr1", value);
          }
          setAttr1(value);
        }}
        onBlur={() => runValidationTasks("attr1", attr1)}
        errorMessage={errors.attr1?.errorMessage}
        hasError={errors.attr1?.hasError}
        {...getOverrideProps(overrides, "attr1")}
      ></TextField>
      <TextField
        label="Attr2"
        isRequired={false}
        isReadOnly={false}
        value={attr2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2: value,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.attr2 ?? value;
          }
          if (errors.attr2?.hasError) {
            runValidationTasks("attr2", value);
          }
          setAttr2(value);
        }}
        onBlur={() => runValidationTasks("attr2", attr2)}
        errorMessage={errors.attr2?.errorMessage}
        hasError={errors.attr2?.hasError}
        {...getOverrideProps(overrides, "attr2")}
      ></TextField>
      <TextField
        label="Attr3"
        isRequired={false}
        isReadOnly={false}
        value={attr3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3: value,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.attr3 ?? value;
          }
          if (errors.attr3?.hasError) {
            runValidationTasks("attr3", value);
          }
          setAttr3(value);
        }}
        onBlur={() => runValidationTasks("attr3", attr3)}
        errorMessage={errors.attr3?.errorMessage}
        hasError={errors.attr3?.hasError}
        {...getOverrideProps(overrides, "attr3")}
      ></TextField>
      <TextField
        label="Line total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={lineTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal: value,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.lineTotal ?? value;
          }
          if (errors.lineTotal?.hasError) {
            runValidationTasks("lineTotal", value);
          }
          setLineTotal(value);
        }}
        onBlur={() => runValidationTasks("lineTotal", lineTotal)}
        errorMessage={errors.lineTotal?.errorMessage}
        hasError={errors.lineTotal?.hasError}
        {...getOverrideProps(overrides, "lineTotal")}
      ></TextField>
      <TextField
        label="Subtotal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={subtotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal: value,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.subtotal ?? value;
          }
          if (errors.subtotal?.hasError) {
            runValidationTasks("subtotal", value);
          }
          setSubtotal(value);
        }}
        onBlur={() => runValidationTasks("subtotal", subtotal)}
        errorMessage={errors.subtotal?.errorMessage}
        hasError={errors.subtotal?.hasError}
        {...getOverrideProps(overrides, "subtotal")}
      ></TextField>
      <TextField
        label="Sales tax"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={salesTax}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax: value,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.salesTax ?? value;
          }
          if (errors.salesTax?.hasError) {
            runValidationTasks("salesTax", value);
          }
          setSalesTax(value);
        }}
        onBlur={() => runValidationTasks("salesTax", salesTax)}
        errorMessage={errors.salesTax?.errorMessage}
        hasError={errors.salesTax?.hasError}
        {...getOverrideProps(overrides, "salesTax")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total: value,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <TextField
        label="Internal comments"
        isRequired={false}
        isReadOnly={false}
        value={internalComments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments: value,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.internalComments ?? value;
          }
          if (errors.internalComments?.hasError) {
            runValidationTasks("internalComments", value);
          }
          setInternalComments(value);
        }}
        onBlur={() => runValidationTasks("internalComments", internalComments)}
        errorMessage={errors.internalComments?.errorMessage}
        hasError={errors.internalComments?.hasError}
        {...getOverrideProps(overrides, "internalComments")}
      ></TextField>
      <TextField
        label="Email comments"
        isRequired={false}
        isReadOnly={false}
        value={emailComments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments: value,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.emailComments ?? value;
          }
          if (errors.emailComments?.hasError) {
            runValidationTasks("emailComments", value);
          }
          setEmailComments(value);
        }}
        onBlur={() => runValidationTasks("emailComments", emailComments)}
        errorMessage={errors.emailComments?.errorMessage}
        hasError={errors.emailComments?.hasError}
        {...getOverrideProps(overrides, "emailComments")}
      ></TextField>
      <TextField
        label="Attr4"
        isRequired={false}
        isReadOnly={false}
        value={attr4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4: value,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.attr4 ?? value;
          }
          if (errors.attr4?.hasError) {
            runValidationTasks("attr4", value);
          }
          setAttr4(value);
        }}
        onBlur={() => runValidationTasks("attr4", attr4)}
        errorMessage={errors.attr4?.errorMessage}
        hasError={errors.attr4?.hasError}
        {...getOverrideProps(overrides, "attr4")}
      ></TextField>
      <TextField
        label="Attr5"
        isRequired={false}
        isReadOnly={false}
        value={attr5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5: value,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.attr5 ?? value;
          }
          if (errors.attr5?.hasError) {
            runValidationTasks("attr5", value);
          }
          setAttr5(value);
        }}
        onBlur={() => runValidationTasks("attr5", attr5)}
        errorMessage={errors.attr5?.errorMessage}
        hasError={errors.attr5?.hasError}
        {...getOverrideProps(overrides, "attr5")}
      ></TextField>
      <TextField
        label="Attr6"
        isRequired={false}
        isReadOnly={false}
        value={attr6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6: value,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.attr6 ?? value;
          }
          if (errors.attr6?.hasError) {
            runValidationTasks("attr6", value);
          }
          setAttr6(value);
        }}
        onBlur={() => runValidationTasks("attr6", attr6)}
        errorMessage={errors.attr6?.errorMessage}
        hasError={errors.attr6?.hasError}
        {...getOverrideProps(overrides, "attr6")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls: values,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country,
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
      <TextField
        label="Address line1"
        isRequired={false}
        isReadOnly={false}
        value={addressLine1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1: value,
              addressLine2,
              city,
              state,
              zip,
              country,
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2: value,
              city,
              state,
              zip,
              country,
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
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city: value,
              state,
              zip,
              country,
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
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state: value,
              zip,
              country,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip: value,
              country,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quotationNumber,
              dateSent,
              custRefNum,
              companyName,
              contact,
              phone,
              email,
              shippingTerms,
              shippingMethod,
              leadTime,
              paymentTerms,
              dueDate,
              quantityRequested,
              quantityQuoted,
              nsn,
              partNumber,
              altPartNumber,
              condition,
              uom,
              description,
              price,
              discount,
              attr1,
              attr2,
              attr3,
              lineTotal,
              subtotal,
              salesTax,
              total,
              internalComments,
              emailComments,
              attr4,
              attr5,
              attr6,
              imageUrls,
              addressLine1,
              addressLine2,
              city,
              state,
              zip,
              country: value,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
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
