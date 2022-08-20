import data from "./test.json"

const translation = data.data.attributes.translation.reduce((result, current) => {
  return Object.assign(result, current);
})

export const zh = {
  "zh": {
    translation
  }
}