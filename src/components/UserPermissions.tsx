import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type Optgroup = {
  label: string;
  options: Option[];
};

type SelectOption = Option | Optgroup;

type CheckableSelectProps = {
  options: SelectOption[];
  onChange: (selectedItems: string[]) => void;
};

const CheckableSelect = ({
  options,
  onChange,
}: CheckableSelectProps): JSX.Element => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleOptionClick = (optionValue: string): void => {
    if (selectedItems.includes(optionValue)) {
      setSelectedItems(selectedItems.filter((item) => item !== optionValue));
    } else {
      setSelectedItems([...selectedItems, optionValue]);
    }
  };

  return (
    <div>
      {options.map((option) => {
        if ("options" in option) {
          return (
            <div key={option.label}>
              <h3>{option.label}</h3>
              {option.options.map((subOption: Option) => (
                <label key={subOption.value}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(subOption.value)}
                    onChange={() => handleOptionClick(subOption.value)}
                  />
                  {subOption.label}
                </label>
              ))}
            </div>
          );
        } else {
          return (
            <label key={option.value}>
              <input
                type="checkbox"
                checked={selectedItems.includes(option.value)}
                onChange={() => handleOptionClick(option.value)}
              />
              {option.label}
            </label>
          );
        }
      })}
      <button onClick={() => onChange(selectedItems)}>Save</button>
    </div>
  );
};

const UserPermissions = (): JSX.Element => {
  const options: SelectOption[] = [
    {
      label: "Users",
      options: [
        { label: "View Users", value: "view-users" },
        { label: "Add User", value: "add-user" },
        { label: "Edit User", value: "edit-user" },
        { label: "Delete User", value: "delete-user" },
      ],
    },
    {
      label: "Permissions",
      options: [
        { label: "View Permissions", value: "view-permissions" },
        { label: "Add Permission", value: "add-permission" },
        { label: "Edit Permission", value: "edit-permission" },
        { label: "Delete Permission", value: "delete-permission" },
      ],
    },
  ];

  const handlePermissionsChange = (selectedItems: string[]): void => {
    console.log(`Selected User Permissions: ${selectedItems}`);
  };

  return (
    <div>
      <h1>User Permissions:</h1>
      <CheckableSelect options={options} onChange={handlePermissionsChange} />
    </div>
  );
};

// const UserPermissions = () => {
//   return (
//     <div className="user-permission-container">

//         <div className="user-permission-header">
//         <div className="user-permission-header-title">
//             User Permission
//         </div>
//         <img src="" alt="close" className="user-permission-close" />
//         </div>

//         <div className="user-permission-users-section">
//             <div className="user-permission-users">
//                 <select name="" className="user-permission-user" id="">
//                     <option value="">User 1</option>
//                     <option value="">User 2</option>
//                     <option value="">User 3</option>
//                     <option value="">User 4</option>
//                     <option value="">User 5</option>
//                     <option value="">User 6</option>
//                 </select>
//             </div>
//             <div className="user-permission-save-button"> Save </div>
//             <div className="user-permission-cancel-button"> Cancel </div>
//         </div>

//         <div className="user-permission-section">
//             <select name="" className="user-permission-section-option" id="">
//                 <optgroup label='wandwja' >
//                 <option value="">User 1</option>
//                     <option value="">User 2</option>
//                 </optgroup>
//             </select>
//         </div>

//     </div>
//   )
// }

export default UserPermissions;
