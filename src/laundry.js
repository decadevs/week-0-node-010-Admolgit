/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */

  function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    // Set clean socks to empty array
    let cleanSocksObj = [];
    // Set dirty socks to empty array
    let dirtySocksObj = [];
    // Set washed socks count to empty array
    let countSocks = 0;
    // Set pairable socks
    let pairableSocks = 0;
    // Set the number of pairs Anna can travel with
    let socksPairAnnaCanTravelWith = [];

    // Check clean sock in the clean pile object and add it to clean socks object or set it to 1
    Array.from(cleanPile).forEach(cleanSock => (cleanSocksObj[cleanSock] = cleanSocksObj[cleanSock] + 1 || 1));
    // Check dirty sock in the dirty pile object and add it to the dirty socks object or set it to 1
    Array.from(dirtyPile).forEach(dirtySock => (dirtySocksObj[dirtySock] = dirtySocksObj[dirtySock] + 1 || 1));

    // Loop through the array of dirty pile
    for(let i = 0; i < dirtyPile.length; i++) {
      // Check if the number of washes is greater than the socks washed counted and clean pile includes a sock that can pair a  sock in the dirty pile and the
      if(noOfWashes > countSocks && cleanPile.includes(dirtyPile[i]) && cleanSocksObj[dirtyPile[i]] % 2 >= 1) {
        // Count the number of sock washed
        countSocks++;
        // Push dirty sock washed to the clean pile
        cleanPile.push(dirtyPile[i]);
        // Remove the washed from the dirty pile
        dirtyPile.splice(i, 1);
        // Add the sock washed to clean sock object
        cleanSocksObj[dirtyPile[i]] += 1;
      }
    }

    // Loop through the dirty pile again
    for(let i = 0; i < dirtyPile.length; i++) {
      // Check if dirty sock in the dirty sock object is greater than 1 and number of sock washed is less than number of washes
      if(dirtySocksObj[dirtyPile[i]] > 1 && countSocks < noOfWashes) {
        // Count the sock washed
        countSocks++;
        // Push that sock washed to clean pile
        cleanPile.push([dirtyPile[i]]);
      }
    }

    // Finally loop through all the clean sock pile I have
    Array.from(cleanPile).forEach(cleanSock => {
      // Add the socks to the socks Anna can travel with
      socksPairAnnaCanTravelWith[cleanSock] = socksPairAnnaCanTravelWith[cleanSock] + 1 || 1;
      // Check if the pairs are correct
      if(socksPairAnnaCanTravelWith[cleanSock] % 2 == 0) {
        // Then count the pairs and add it to pairable socks
        pairableSocks++;
      }
    });

    // Return the pairable socks(which should be a number)
    return pairableSocks;
  }


module.exports = getMaxPairs;
