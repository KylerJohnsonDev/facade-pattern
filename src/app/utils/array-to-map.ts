export function objArrayToMap<T>(nameOfPropToBeUsedAsMapKey: keyof T, objects: T[]): Map<string, T> {
  return new Map<string, T>(objects.map((obj: T) => {
    const valueOfMapKey = obj[nameOfPropToBeUsedAsMapKey];
    return [String(valueOfMapKey), obj]
  }))
}
