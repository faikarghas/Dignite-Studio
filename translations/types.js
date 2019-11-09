import { locales } from './config'

// cek sesuai dengan config atau tidak

export function isLocale(tested){
  return locales.some(locale => locale === tested)
}