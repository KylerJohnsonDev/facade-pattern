export function mapToArrayOfValues(map: Map<unknown, unknown>) {
  return Array.from(map, ([_, value]) => value);
}
