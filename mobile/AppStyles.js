import {THEME_WHITE, bodySecondarySize, darkGray, standardContainerPadding, textLarge} from './src/components/common';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {StyleSheet} from "react-native";

export const defaultHeaderTint = darkGray;

export const AppStyles = StyleSheet.create({
  defaultHeader: {
    backgroundColor: THEME_WHITE,
    borderBottomWidth: 0,
    elevation: 0,
    marginLeft: wp(4),
    marginTop: hp(2),
    shadowOpacity: 0,
  },
  defaultHeaderTitle: {
    fontSize: textLarge,
    paddingLeft: wp(2),
  },
});
