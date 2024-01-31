/*
This regular expression matches any string that contains a valid time in the 24-hour format, separated by word boundaries.
///
The time has a format: hours:minutes. Both hours and minutes has two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456.

P.S. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result.

P.P.S. The regexp shouldn’t match 123:456.
\\\
*/

const REGEXP = /\b([0-1]?[0-9]|2[0-3])([:][0-5][0-9])\b/g

console.log( "Breakfast at 09:00 in the room 123:456.".match(REGEXP) ); // 09:00
