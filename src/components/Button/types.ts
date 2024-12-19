import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'bordered';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    iconClassName?: string;
    fullWidth?: boolean;
    loading?: boolean;
}