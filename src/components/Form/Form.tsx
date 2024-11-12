import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FC } from 'react'
import CustomField from '../CustomField/CustomField'
import { fields, initialValues } from './data'
import { validationSchema } from './validationSchema'

export const Form: FC = () => {
	const { handleSubmit, getFieldProps, errors, touched } = useFormik({
		initialValues,
		onSubmit: values => {
			console.log(values)
		},
		validationSchema,
	})

	return (
		<Flex bg='gray.100' align='center' justify='center' h='100vh'>
			<Box bg='white' p={6} rounded='md' w='2xl'>
				<form onSubmit={handleSubmit}>
					<VStack spacing={4} align='flex-start'>
						{fields.map(field => (
							<CustomField
								key={field.id}
								{...field}
								getFieldProps={getFieldProps}
								errors={errors}
								touched={touched}
							/>
						))}
						<Button type='submit' colorScheme='purple' width='full'>
							Отправить
						</Button>
					</VStack>
				</form>
			</Box>
		</Flex>
	)
}
