import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { FaChevronLeft, FaUser, FaHome, FaSearch, FaCog, FaBell } from 'react-icons/fa';

const iconMap = {
    none: null,
    user: <FaUser />,
    chevronLeft: <FaChevronLeft />,
    home: <FaHome />,
    search: <FaSearch />,
    settings: <FaCog />,
    bell: <FaBell />,
};

const meta: Meta<typeof Button> = {
    title: 'Компоненты/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        // Basic Props
        children: {
            control: 'text',
            description: 'Содержимое кнопки',
            defaultValue: 'Button',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'bordered'],
            description: 'Выберите стиль кнопки',
            defaultValue: 'primary',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Размер кнопки',
            defaultValue: 'medium',
        },
        disabled: {
            control: 'boolean',
            description: 'Определяет, является ли кнопка неактивной',
            defaultValue: false,
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'Тип кнопки',
            defaultValue: 'button',
        },

        // Icon Props
        icon: {
            options: Object.keys(iconMap),
            mapping: iconMap,
            control: {
                type: 'select',
                labels: {
                    none: 'Без иконки',
                    user: 'Пользователь',
                    chevronLeft: 'Стрелка влево',
                    home: 'Домой',
                    search: 'Поиск',
                    settings: 'Настройки',
                    bell: 'Уведомления',
                }
            },
            description: 'Выберите иконку для кнопки',
        },
        iconPosition: {
            control: 'select',
            options: ['left', 'right'],
            description: 'Позиция иконки',
            defaultValue: 'right',
        },
        iconClassName: {
            control: 'text',
            description: 'Классы для иконки',
        },

        // Style Props
        className: {
            control: 'text',
            description: 'Классы для кнопки',
        },
        style: {
            control: 'object',
            description: 'Стили для кнопки',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Определяет, является ли кнопка полной ширины',
            defaultValue: false,
        },

        // State Props
        loading: {
            control: 'boolean',
            description: 'Определяет, является ли кнопка загруженной',
            defaultValue: false,
        },
        onClick: {
            action: 'clicked',
            description: 'Обработчик события onClick',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Stories
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
        size: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Bordered: Story = {
    args: {
        children: 'Bordered Button',
        variant: 'bordered',
    },
};

export const LongText: Story = {
    args: {
        children: 'This is a button with very long text content',
        variant: 'primary',
    },
};

// Icon Stories
export const WithIcon: Story = {
    args: {
        children: 'Button with Icon',
        variant: 'primary',
        icon: 'user',
        iconPosition: 'right',
        iconClassName: 'ml-2',
    },
};

export const WithLeftIcon: Story = {
    args: {
        children: 'Button with Left Icon',
        variant: 'secondary',
        icon: 'chevronLeft',
        iconPosition: 'left',
        iconClassName: 'mr-2',
    },
};