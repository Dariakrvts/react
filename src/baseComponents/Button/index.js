import { Button as MUButton } from "@mui/material";

export const Button = ({ color, disabled, size, variant, text, onClick }) => {
    return (
        <MUButton
            color={color}
            disabled={disabled}
            variant={variant}
            size={size}
            onClick={onClick}
        >
            {text}
        </MUButton>
    );
};