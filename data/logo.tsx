import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
	return (
		<chakra.img src="/logo(1).png" alt="Logo" height="32px" {...props} />
	)
}
