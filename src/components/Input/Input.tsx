import clsx from 'clsx';
import { forwardRef, useState } from 'react';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    hint,
    size = 'medium',
    variant = 'outlined',
    startIcon,
    endIcon,
    iconClassName,
    fullWidth,
    className,
    inputClassName,
    labelClassName,
    disabled,
    loading,
    success,
    floatingLabel = false,
    placeholder,
    value,
    defaultValue,
    focusColor,
    ringOnFocus = true,
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(Boolean(value || defaultValue));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        setHasValue(Boolean(e.target.value));
        props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHasValue(Boolean(e.target.value));
        props.onChange?.(e);
    };

    const sizeClasses = {
        small: 'px-2 py-1 text-sm h-8',
        medium: 'px-3 py-2 text-base h-10',
        large: 'px-4 py-3 text-lg h-12'
    };

    const variantClasses = {
        outlined: clsx(
            'border border-gray-300 bg-white',
            ringOnFocus ? [
                focusColor?.startsWith('#')
                    ? 'focus:ring-1 focus:border-[color:var(--focus-color)] focus:ring-[color:var(--focus-color)]'
                    : `focus:border-${focusColor}-500 focus:ring-1 focus:ring-${focusColor}-500`
            ] : 'focus:outline-none focus:ring-0'
        ),
        filled: clsx(
            'border-0 bg-gray-100 focus:bg-gray-50',
            ringOnFocus ? [
                focusColor?.startsWith('#')
                    ? 'focus:ring-2 focus:ring-[color:var(--focus-color)]'
                    : `focus:ring-2 focus:ring-${focusColor}-500`
            ] : 'focus:outline-none focus:ring-0'
        ),
        standard: clsx(
            'border-0 border-b border-gray-300 bg-transparent px-0',
            ringOnFocus ? [
                focusColor?.startsWith('#')
                    ? 'focus:border-[color:var(--focus-color)] focus:ring-0'
                    : `focus:border-${focusColor}-500 focus:ring-0`
            ] : 'focus:outline-none focus:ring-0'
        )
    };

    return (
        <div className={clsx('relative', fullWidth && 'w-full', className)}>
            <div className="relative">
                {loading ? (
                    <div className={clsx(
                        'w-full rounded-md  bg-gray-200',
                        sizeClasses[size],
                        'animate-[shimmer_2s_infinite]',
                        inputClassName
                    )}>
                        <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]" />
                    </div>
                ) : (
                    <>
                        {startIcon && (
                            <span className={clsx('absolute left-3 top-1/2 -translate-y-1/2', iconClassName)}>
                                {startIcon}
                            </span>
                        )}

                        <input
                            ref={ref}
                            className={clsx(
                                'peer w-full rounded-md transition-colors duration-200 focus:outline-none',
                                sizeClasses[size],
                                variantClasses[variant],
                                startIcon && 'pl-10',
                                endIcon && 'pr-10',
                                floatingLabel && 'placeholder-transparent',
                                inputClassName
                            )}
                            style={focusColor?.startsWith('#') ? { '--focus-color': focusColor } as React.CSSProperties : undefined}
                            placeholder={floatingLabel ? ' ' : placeholder}
                            disabled={disabled || loading}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={value}
                            defaultValue={defaultValue}
                            {...props}
                        />

                        {endIcon && (
                            <span className={clsx('absolute right-3 top-1/2 -translate-y-1/2', iconClassName)}>
                                {endIcon}
                            </span>
                        )}
                    </>
                )}

                {floatingLabel && label && (
                    <label
                        className={clsx(
                            'absolute left-3 top-[50%] -translate-y-1/2 transition-all duration-200',
                            'pointer-events-none text-gray-500',
                            focusColor?.startsWith('#')
                                ? 'peer-focus:text-[color:var(--focus-color)]'
                                : `peer-focus:text-${focusColor}-500`,
                            'peer-focus:-translate-y-[200%] peer-focus:scale-90',
                            (isFocused || hasValue) && '-translate-y-[190%] scale-90',
                            error && 'text-red-500',
                            labelClassName
                        )}
                    >
                        {label}
                    </label>
                )}
            </div>

            {(error || hint) && (
                <p className={clsx(
                    'mt-1 text-sm',
                    error ? 'text-red-500' : 'text-gray-500'
                )}>
                    {error || hint}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input'; 