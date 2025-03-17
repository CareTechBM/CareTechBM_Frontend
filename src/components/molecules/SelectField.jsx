import { TextField } from "@mui/material";
import { Children } from "react";

export const SelectField = ({ label, value, onChange }) => {

    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            select
        >
            {Children}
        </TextField>
    );
}