import * as Yup from 'yup'
import { errorMessages } from '../../shared/costants/errorMessages'

Yup.addMethod(Yup.number, 'moreThanSumOfFields', function (fields: string[]) {
	return this.test(
		'moreThanSumOfFields',
		'Общая площадь должна быть больше суммы жилой площади и площади кухни',
		function (value) {
			const { parent } = this
			const sumOfFields = fields.reduce(
				(sum, field) => sum + (parent[field] || 0),
				0
			)
			return (value || 0) > sumOfFields
		}
	)
})

export const validationSchema = Yup.object({
	name: Yup.string().required(errorMessages.required),
	address: Yup.string().required(errorMessages.required),
	floor: Yup.number()
		.required(errorMessages.required)
		.min(-1, errorMessages.min(-1))
		.notOneOf([0], errorMessages.notEqualZero)
		.test('max-floors', function (value) {
			const totalFloors = this.parent.totalFloors
			if (totalFloors && value > totalFloors) {
				return this.createError({ message: errorMessages.max(totalFloors) })
			}
			return true
		}),
	totalFloors: Yup.number()
		.required(errorMessages.required)
		.min(3, errorMessages.min(3))
		.max(200, errorMessages.max(200)),
	square: Yup.number()
		.required(errorMessages.required)
		.min(0, errorMessages.min(0))
		.moreThanSumOfFields(['livingSquare', 'kitchenSquare']),
	livingSquare: Yup.number()
		.required(errorMessages.required)
		.min(0, errorMessages.min(0)),
	kitchenSquare: Yup.number()
		.required(errorMessages.required)
		.min(0, errorMessages.min(0)),
})
