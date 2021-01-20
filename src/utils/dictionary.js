import dictionary from 'sky-engine/utils/dictionary'
const localDictionary = {}

for (const key in localDictionary) {
  // eslint-disable-next-line no-prototype-builtins
  if (localDictionary.hasOwnProperty(key)) {
    dictionary[key] = localDictionary[key]
  }
}
export default dictionary
