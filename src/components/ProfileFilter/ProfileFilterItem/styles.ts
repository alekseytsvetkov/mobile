import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {colors, radius, tBase} from '_app/constants';

export const s = StyleSheet.create({
    filterItem: {
        backgroundColor: colors.gray100,
        borderRadius: radius.base,
        paddingHorizontal: normalize(32),
        paddingVertical: normalize(14),
        marginHorizontal: normalize(10),
    },
    filterItemTitle: {
        ...tBase,
    },
});
