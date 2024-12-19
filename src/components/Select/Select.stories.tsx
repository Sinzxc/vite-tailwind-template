import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Компоненты/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Метка поля выбора',
        },
        options: {
            control: 'object',
            description: 'Массив опций для выбора',
        },
        error: {
            control: 'text',
            description: 'Текст ошибки',
        },
        hint: {
            control: 'text',
            description: 'Подсказка под полем',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Размер поля выбора',
        },
        variant: {
            control: 'select',
            options: ['outlined', 'filled', 'standard'],
            description: 'Вариант отображения',
        },
        register: {
            control: 'object',
            description: 'Регистрация поля выбора для формы react-hook-form',
        },
        classNames: {
            control: 'text',
            description: 'Классы для компонента',
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
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

const defaultOptions = [
    { value: '1', label: 'Опция 1' },
    { value: '2', label: 'Опция 2' },
    { value: '3', label: 'Опция 3' },
];

export const Default: Story = {
    args: {
        options: defaultOptions,
        placeholder: 'Выберите опцию...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Выберите категорию',
        options: defaultOptions,
        placeholder: 'Выберите категорию...',
    },
};

export const WithError: Story = {
    args: {
        label: 'Категория',
        options: defaultOptions,
        error: 'Пожалуйста, выберите категорию',
    },
}; 