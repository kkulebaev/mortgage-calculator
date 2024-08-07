import { computed, type Ref } from 'vue'

export function usePagination<T>(items: Ref<Array<T>>, pageNumber: Ref<number>, size: Ref<number>) {
  const paginatedData = computed(() => {
    const start = (pageNumber.value - 1) * size.value
    const end = start + size.value
    return items.value.slice(start, end)
  })
  return { paginatedData }
}
