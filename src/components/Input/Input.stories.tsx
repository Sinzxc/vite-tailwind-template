import type { Meta, StoryObj } from '@storybook/react';
import { FaSearch, FaUser, FaLock } from 'react-icons/fa';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Компоненты/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        // Основные пропсы
        label: {
            control: 'text',
            description: 'Метка поля ввода',
        },
        placeholder: {
            control: 'text',
            description: 'Подсказка в поле ввода',
        },
        error: {
            control: 'text',
            description: 'Текст ошибки',
        },
        hint: {
            control: 'text',
            description: 'Подсказка под полем ввода',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Размер поля ввода',
        },
        variant: {
            control: 'select',
            options: ['outlined', 'filled', 'standard'],
            description: 'Вариант отображения',
        },

        // Иконки
        startIcon: {
            options: ['none', 'search', 'user', 'lock'],
            mapping: {
                none: null,
                search: <FaSearch />,
                user: <FaUser />,
                lock: <FaLock />,
            },
            control: 'select',
            description: 'Иконка в начале поля',
        },
        endIcon: {
            options: ['none', 'search', 'user', 'lock'],
            mapping: {
                none: null,
                search: <FaSearch />,
                user: <FaUser />,
                lock: <FaLock />,
            },
            control: 'select',
            description: 'Иконка в конце поля',
        },

        // Состояния
        disabled: {
            control: 'boolean',
            description: 'Отключено ли поле',
        },
        loading: {
            control: 'boolean',
            description: 'Находится ли поле в состоянии загрузки',
        },
        success: {
            control: 'boolean',
            description: 'Находится ли поле в состоянии успеха',
        },
        floatingLabel: {
            control: 'boolean',
            description: 'Используется ли плавающая метка',
        },
        focusColor: {
            control: 'color',
            description: 'Цвет фокуса',
        },
        ringOnFocus: {
            control: 'boolean',
            description: 'Используется ли кольцо при фокусе',
        },
        register: {
            control: 'object',
            description: 'Регистрация поля ввода для формы react-hook-form',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Введите текст...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Имя пользователя',
        placeholder: 'Введите имя пользователя',
    },
};

export const WithError: Story = {
    args: {
        label: 'Пароль',
        type: 'password',
        error: 'Пароль должен содержать минимум 8 символов',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Поиск',
        placeholder: 'Поиск...',
        startIcon: <FaSearch />,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Отключенное поле',
        placeholder: 'Недоступно для ввода',
        disabled: true,
    },
};

export const WithFloatingLabel: Story = {
    args: {
        label: 'Email',
        placeholder: 'Введите email',
        floatingLabel: true,
    },
}; 