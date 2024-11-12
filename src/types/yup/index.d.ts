import 'yup'

declare module 'yup' {
	interface NumberSchema {
		moreThanSumOfFields(fields: string[]): NumberSchema
	}
}
