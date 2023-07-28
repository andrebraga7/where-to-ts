/** This functions takes in the postcode and formats it to have one space in the middle.
 * It first checks to see if there is a space, if not it adds one and returns the new string.
 */
export const formatPostcode = (postcode: string) => {
  if (postcode.at(-4) !== " ") {
    const postcodeArray = postcode.split("")
    postcodeArray.splice(-3, 0, " ")
    return postcodeArray.join("")
  }
  return postcode
}

export const stringToNumber = (result: string[] | null) => {
  const totalMinutesArray: number[] = []
  const totalDistanceArray: number[] = []

  if (result) {
    result.map((item) => {
      const newItem = item.split(",")
      totalMinutesArray.push(Number(newItem[0]))
      totalDistanceArray.push(Number(newItem[1]))
      return null
    })
  }

  const totalMinutes = totalMinutesArray.reduce((acc, curr) => acc + curr, 0)
  const totalDistance = totalDistanceArray.reduce((acc, curr) => acc + curr, 0)

  return { totalMinutes, totalDistance }
}

export const minutesToHours = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60
  return { hours, minutes }
}
