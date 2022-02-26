import {StyleSheet} from 'react-native';

import {normalize} from '_app/utils/dimensions';
import {PLATFORM} from '_app/constants';

export const s = StyleSheet.create({
    header: {
        display: 'flex',
        width: '100%',
        paddingHorizontal: normalize(12),
        paddingBottom: normalize(10),
        paddingTop: PLATFORM.IS_IOS ? normalize(5) : normalize(10),
    },
    main: {
        paddingBottom: PLATFORM.IS_IOS ? normalize(20) : normalize(60),
    },
});
