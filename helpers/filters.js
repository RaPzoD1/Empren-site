import moment from 'moment'

export function filterBusinesses (filter, businesses) {
  let filteredList = [...businesses]
  // filter status
  if (filter.status !== 'all') {
    const filtered = filteredList.filter(
      business => business.category === filter.status
    )
    filteredList = filtered
  }

  // Search
  if (filter.search !== '') {
    const searchTerm = filter.search.toLowerCase()
    const searchList = filteredList.filter((el) => {
      return (el.description !== null && el.description.toLowerCase().includes(searchTerm)) ||
      (el.name !== null && el.name.toLowerCase().includes(searchTerm))
    })
    filteredList = searchList
  }
  return filteredList
}

// order list

export function orderBusinesses (order, businesses) {
  const orderedList = [...businesses]

  if (order === 'createdAt') {
    orderedList.sort((a, b) => {
      const unixA = moment(a.createdAt).unix()
      const unixB = moment(b.createdAt).unix()
      return unixA < unixB ? -1 : 1
    })
  } else {
    orderedList.sort((a, b) => {
      const nameA = a[order] ? a[order].toLowerCase() : 'zzz'
      const nameB = b[order] ? b[order].toLowerCase() : 'zzz'
      return nameA < nameB ? -1 : 1
    })
  }
  return orderedList
}
