import React from 'react';

import {Text} from 'react-native';

import {useTranslation} from 'react-i18next';

import {SafeAreaWrapper} from '_app/components';

export const ForgotPasswordScreen = () => {
    const {t} = useTranslation();

    return (
        <SafeAreaWrapper center>
            <Text>Forgot Password</Text>
        </SafeAreaWrapper>
    );
};
