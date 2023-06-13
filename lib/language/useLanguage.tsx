import { useRouter } from "next/router"
import { useMemo } from "react"
import enUS from "./languages/enUS.json"
import { Types as LanguageType } from "./types"

export const useLanguage = (): LanguageType => {
  const { locale } = useRouter()

  const lang: LanguageType = useMemo(() => {
    // This is to account for Storybook where Locale will be Null
    if (locale === null) return enUS

    switch (locale) {
      case "en-US":
        return enUS
      default:
        return enUS
    }
  }, [locale])

  return lang
}
