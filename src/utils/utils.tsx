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

export const minutesToHours = (time: number) => {
  const hours = Math.floor(time / 60)
  const minutes = time % 60
  return { hours, minutes }
}
