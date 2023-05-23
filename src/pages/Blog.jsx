import { useState } from 'react'
import { LOCALES }  from '../translate/locales'
import I18nProvider from '../translate/Provider'
import translate from '../translate/Translate'

export default function Blog() {
        const [languages, setLanguages] = useState(LOCALES.ENGLISH)
        
        const handleChange =(e)=>{
          const {value} = e.target ;
          setLanguages(LOCALES[value])
        }
  return (
      <I18nProvider locale={languages}>
    <div>
     <h1>{translate('title')}</h1>
     <h2>{translate('content')}</h2>
      <select name="languages" id="languages" onChange={handleChange}>
        <option value="ARMENIAN">ARM</option>
        <option value="RUSSIAN">RUS</option>
        <option value="ENGLISH">ENG</option>
      </select>
    </div>
    </I18nProvider>
  )
}
