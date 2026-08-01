export const optionalFieldsConfig = [
  { key: "dateOfBirth", label: "Date of Birth", type: "date" },
  { key: "drivingLicence", label: "Driving Licence", type: "text" },
  { key: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
  { key: "nationality", label: "Nationality", type: "text" },
  { key: "maritalStatus", label: "Marital Status", type: "select", options: ["Single", "Married", "Divorced", "Widowed"] },
  { key: "website", label: "Website", type: "url" },
  { key: "linkedIn", label: "LinkedIn", type: "url" }
];

export const defaultAdditionalInfo = {
    dateOfBirth: "",
    drivingLicence: "",
    gender: "",
    nationality: "",
    maritalStatus: "",
    website: "",
    linkedIn: ""
};
