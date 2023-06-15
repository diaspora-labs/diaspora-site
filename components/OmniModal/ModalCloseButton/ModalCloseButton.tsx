import { As, CloseButtonProps, ModalCloseButton as CModalCloseButton } from "@chakra-ui/react"
// import { faClose } from '@fortawesome/pro-light-svg-icons';
// import { FaIcon } from '../FaIcon';
import { FC } from "react"

export const ModalCloseButton: FC<CloseButtonProps> = (props) => {
  return <CModalCloseButton {...props}>X</CModalCloseButton>
}
