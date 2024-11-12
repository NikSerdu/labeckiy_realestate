import { IFieldProps } from '../CustomField/customField.types'

export const fields: IFieldProps[] = [
	{ id: 1, type: 'input', name: 'name', label: 'Название объекта' },
	{ id: 2, type: 'input', name: 'address', label: 'Адрес' },
	{ id: 3, type: 'input', name: 'floor', label: 'Этаж' },
	{
		id: 4,
		type: 'input',
		name: 'totalFloors',
		label: 'Количество этажей в доме',
	},
	{ id: 5, type: 'input', name: 'square', label: 'Площадь' },
	{ id: 6, type: 'input', name: 'livingSquare', label: 'Жилая площадь' },
	{ id: 7, type: 'input', name: 'kitchenSquare', label: 'Площадь кухни' },
]

export const initialValues = {
	name: '',
	address: '',
	floor: 1,
	totalFloors: 3,
	square: 0,
	livingSquare: 0,
	kitchenSquare: 0,
}
