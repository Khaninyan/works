import React from 'react'
import { IntlProvider } from 'react-intl'
import messages from './messages'

export default function Provider({children, locale = LOCALES.ENGLISH}) {
  return (
    <IntlProvider
    locale={locale}
    textComponent={React.Fragment}
    messages={messages[locale]}
    >
        {children}
    </IntlProvider>
  )
}
