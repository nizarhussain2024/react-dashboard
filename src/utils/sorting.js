export function sortByField(array, field, direction = 'asc') {
  const sorted = [...array]
  
  sorted.sort((a, b) => {
    let aVal = a[field]
    let bVal = b[field]
    
    // Handle dates
    if (field.includes('date') || field.includes('Date')) {
      aVal = new Date(aVal)
      bVal = new Date(bVal)
    }
    
    // Handle numbers
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return direction === 'asc' ? aVal - bVal : bVal - aVal
    }
    
    // Handle strings
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return direction === 'asc' 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    }
    
    return 0
  })
  
  return sorted
}

export function filterByField(array, field, value) {
  if (!value) return array
  return array.filter(item => {
    const fieldValue = item[field]?.toString().toLowerCase() || ''
    return fieldValue.includes(value.toLowerCase())
  })
}




