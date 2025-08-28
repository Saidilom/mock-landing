import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
	return (
		<chakra.img src="/mockmaster_logo_white_mock.png" alt="Logo" height="32px" {...props} />
	)
}
