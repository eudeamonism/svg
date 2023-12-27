import {
  Menu,
  MenuGroup,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
  Flex,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdImportContacts } from 'react-icons/md';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const MobileNav = () => {
  return (
    <Flex
      p="2"
      borderBottom="1px"
      borderBottomColor="gray.600"
      justify="space-between"
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuGroup title="FORTNITE" fontWeight="bold">
            <MenuItem>Save the World</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="WRITING" fontWeight="bold">
            <MenuItem isDisabled>Coming Soon</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="RECIPES" fontWeight="bold">
            <MenuItem>Cookies</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
      <Flex align="center" gap="2" cursor="pointer">
        <Text as={MdImportContacts} fontSize="large" />
        <Text
          fontWeight="bold"
          fontSize="large"
          /* _hover={{ textShadow: '2px 2px #a5a5a5 ' }} */
        >
          Myth Scribe
        </Text>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default MobileNav;
