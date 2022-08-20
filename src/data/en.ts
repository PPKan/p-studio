import dataen from "./testen.json"

const translation = dataen.data.attributes.translation.reduce((result, current) => {
  return Object.assign(result, current);
})

export const en = {
  "en": {
    translation
  }
}