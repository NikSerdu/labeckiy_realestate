import {
	Checkbox,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Radio,
	RadioGroup,
} from '@chakra-ui/react'
import { FieldConfig, FieldInputProps } from 'formik'
import { IFieldProps } from './customField.types'

const CustomField = ({
	type,
	name,
	label,
	options,
	getFieldProps,
	errors,
	touched,
}: IFieldProps & {
	getFieldProps: (name: string | FieldConfig<any>) => FieldInputProps<any>
	errors: { [key: string]: string }
	touched: { [key: string]: boolean }
}) => {
	const error = errors[name]
	const isTouched = touched[name]

	return (
		<FormControl isInvalid={!!error && isTouched}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			{type === 'input' && <Input {...getFieldProps(name)} id={name} />}
			{type === 'checkbox' && (
				<Checkbox {...getFieldProps(name)} id={name}>
					{label}
				</Checkbox>
			)}
			{type === 'radio' && (
				<RadioGroup {...getFieldProps(name)} id={name}>
					{options?.map((option, index) => (
						<Radio key={index} value={option}>
							{option}
						</Radio>
					))}
				</RadioGroup>
			)}
			<FormErrorMessage>{error}</FormErrorMessage>
		</FormControl>
	)
}

export default CustomField
