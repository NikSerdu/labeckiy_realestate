type TFieldType = 'input' | 'radio' | 'checkbox'
export interface IFieldProps {
	id: number
	type: TFieldType
	name: string
	label: string
	options?: string[]
}
