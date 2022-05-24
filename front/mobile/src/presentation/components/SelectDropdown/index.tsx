import React from 'react';
import {Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import {icons} from '../../resources/constants';
import styles from './styles';

export const SelectDropdownComponent = ({data}: any) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultButtonText={'Categorie'}
      buttonTextAfterSelection={(_selectedItem: any) => {
        return 'Categorie';
        // return selectedItem.name;
      }}
      rowTextForSelection={(item: any) => {
        return item.name;
      }}
      buttonStyle={styles.dropdown1BtnStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={isOpened => {
        return (
          <Image
            source={icons.polygon}
            style={{
              transform: [
                {rotateX: isOpened ? '180deg' : '0deg'},
                {rotateY: '0deg'},
              ],
            }}
          />
        );
      }}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
    />
  );
};
