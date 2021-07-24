export function mapToArrayOfValues<K,V>(map: Map<K,V>) {
  return Array.from(map, ([_, value]) => value);
}

