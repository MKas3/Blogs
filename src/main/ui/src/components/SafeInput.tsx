import React, { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form';

type InputProps = {
	register: UseFormRegister<FieldValues>;
	title: string;
	value?: string;
	onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
	minLength?: number;
	maxLength?: number;
	pattern?: ValidationRule<RegExp>;
};

function Input({
	register,
	title,
	value,
	onChange,
	minLength,
	maxLength,
	pattern,
}: InputProps) {
	return (
		<div>
			<input
				type='text'
				className='bg-neutral-800 rounded-md border-[1px] border-neutral-700 hover:bg-neutral-700/50 focus:hover:bg-neutral-800 focus:outline-none focus:border-yellow-600 transition'
				placeholder={title}
				{...register(`${title}`, {
					value: value,
					onChange: value => onChange && onChange(value),
					minLength: minLength,
					maxLength: maxLength,
					pattern: pattern,
				})}
			/>
		</div>
	);
}

export default Input;
