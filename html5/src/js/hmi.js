/**
 * @file hmi.js
 * @author Oliver Merkel <Merkel(dot)Oliver(at)web(dot)de>
 * @date 2018 January 8
 *
 * @section LICENSE
 *
 * Copyright 2018, Oliver Merkel <Merkel(dot)Oliver(at)web(dot)de>
 * All rights reserved.
 *
 * Released under the MIT license.
 *
 * @section DESCRIPTION
 *
 * @brief Class Hmi.
 *
 * Class representing the view or Hmi of L'ane rouge.
 * This L'ane rouge board game is a traditional solitaire puzzle.
 *
 */

Hmi.challenge = [
{
  tiles: [
    { x: 1, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 2, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 1, y: 1, width: 2, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '1'
},
{
  tiles: [
    { x: 2, y: 3, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 1, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '2'
},
{
  tiles: [
    { x: 1, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1.5, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '3'
},
{
  tiles: [
    { x: 1, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 2, height: 1 },
    { x: 2, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '4'
},
{
  tiles: [
    { x: 0, y: 3, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 0, width: 2, height: 1 },
    { x: 1, y: 1, width: 2, height: 1 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 2, y: 3, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '5'
},
{
  tiles: [
    { x: 1, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1, y: 0, width: 1, height: 2 },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 }
  ],
  level: 'Beginner',
  id: '6'
},
{
  tiles: [
    { x: 2, y: 3, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 0, y: 3, width: 1, height: 2 },
    { x: 1, y: 3, width: 1, height: 2 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 1, y: 1, width: 1, height: 1 },
    { x: 2, y: 1, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '7'
},
{
  tiles: [
    { x: 0, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1, y: 0, width: 1, height: 2 },
    { x: 2, y: 1, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 2, y: 3, width: 2, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '8'
},
{
  tiles: [
    { x: 2, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1, y: 0, width: 1, height: 2 },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '9'
},
{
  tiles: [
    { x: 0, y: 3, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 1, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 3, width: 2, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 2, y: 2, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '10'
},
{
  tiles: [
    { x: 2, y: 1, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 2, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '11'
},
{
  tiles: [
    { x: 2, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 3, width: 1, height: 2 },
    { x: 1, y: 2, width: 1, height: 2 },
    { x: 2, y: 3, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 0, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 2, y: 2, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '12'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '13'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 3, width: 1, height: 2 },
    { x: 1, y: 3, width: 1, height: 2 },
    { x: 2, y: 3, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '14'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 2, y: 3, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 }
  ],
  level: 'Beginner',
  id: '15'
},
{
  tiles: [
    { x: 1, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 2, height: 1 },
    { x: 2, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 2, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 }
  ],
  level: 'Intermediate',
  id: '16'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 3, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 }
  ],
  level: 'Intermediate',
  id: '17'
},
{
  tiles: [
    { x: 0, y: 3, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 1, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 2, y: 4, width: 2, height: 1 }
  ],
  level: 'Intermediate',
  id: '18'
},
{
  tiles: [
    { x: 1, y: 1, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 2, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '19'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 0, y: 3, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 2, y: 2, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '20'
},
{
  tiles: [
    { x: 2, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 1, y: 1, width: 1, height: 2 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '21'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 1.5, y: 3, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '22'
},
{
  tiles: [
    { x: 2, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 1, y: 1, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '23'
},
{
  tiles: [
    { x: 0, y: 3, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1, y: 1, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 2, y: 1, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '24'
},
{
  tiles: [
    { x: 2, y: 2.5, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 1, y: 1, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '25'
},
{
  tiles: [
    { x: 2, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 0, y: 1, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 1, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 2, y: 2, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '26'
},
{
  tiles: [
    { x: 0, y: 1, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '27'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '28'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 0, y: 3, width: 1, height: 2 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 2, y: 2, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '29'
},
{
  tiles: [
    { x: 0, y: 1.5, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Intermediate',
  id: '30'
},
{
  tiles: [
    { x: 1, y: 1, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 2, height: 1 },
    { x: 2, y: 0, width: 2, height: 1 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '31'
},
{
  tiles: [
    { x: 1, y: 2, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 1, y: 0, width: 2, height: 1 },
    { x: 1, y: 1, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '32'
},
{
  tiles: [
    { x: 0, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '33'
},
{
  tiles: [
    { x: 0, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 2, y: 1, width: 2, height: 1 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '34'
},
{
  tiles: [
    { x: 1, y: 1, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 2, y: 0, width: 2, height: 1 },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '35'
},
{
  tiles: [
    { x: 2, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1, y: 1, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 0, y: 2, width: 1, height: 1 },
    { x: 3, y: 2, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '36'
},
{
  tiles: [
    { x: 0, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 2, y: 0, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 1, y: 3, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '37'
},
{
  tiles: [
    { x: 0, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 1, y: 3, width: 1, height: 2 },
    { x: 2, y: 2, width: 2, height: 1 },
    { x: 2, y: 3, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 2, y: 1, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '38'
},
{
  tiles: [
    { x: 0, y: 1, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 2, y: 0, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 1, y: 0, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '39'
},
{
  tiles: [
    { x: 0, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 2, y: 1, width: 1, height: 2 },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Advanced',
  id: '40'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '41'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 1, y: 2, width: 1, height: 1 },
    { x: 2, y: 2, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '42'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '43'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 1, width: 1, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '44'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 3, y: 1, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '45'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 1, width: 1, height: 2 },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 1.5, y: 2, width: 1, height: 2 },
    { x: 0, y: 4, width: 2, height: 1 },
    { x: 2, y: 4, width: 2, height: 1 },
    { x: 0, y: 0, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '46'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 1, y: 3, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 0, y: 3, width: 1, height: 1 },
    { x: 3, y: 3, width: 1, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '47'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 0, y: 3, width: 2, height: 1 },
    { x: 2, y: 3, width: 2, height: 1 },
    { x: 0, y: 4, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 },
    { x: 3, y: 4, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '48'
},
{
  tiles: [
    { x: 0, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 3, y: 1, width: 1, height: 2 },
    { x: 3, y: 3, width: 1, height: 2 },
    { x: 2, y: 2, width: 1, height: 2 },
    { x: 0, y: 2, width: 2, height: 1 },
    { x: 1, y: 4, width: 2, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 0, width: 1, height: 1 },
    { x: 2, y: 1, width: 1, height: 1 },
    { x: 3, y: 0, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: '49'
},
{
  tiles: [
    { x: 1, y: 0, width: 2, height: 2, target: { x: 1, y: 3 } },
    { x: 0, y: 0, width: 1, height: 2 },
    { x: 3, y: 0, width: 1, height: 2 },
    { x: 0, y: 2, width: 1, height: 2 },
    { x: 3, y: 2, width: 1, height: 2 },
    { x: 1, y: 2, width: 2, height: 1 },
    { x: 1, y: 3, width: 1, height: 1 },
    { x: 2, y: 3, width: 1, height: 1 },
    { x: 1, y: 4, width: 1, height: 1 },
    { x: 2, y: 4, width: 1, height: 1 }
  ],
  level: 'Expert',
  id: 'Classic'
},
];

function Hmi() {}

Hmi.prototype.resize = function () {
  var offsetHeight = 64,
    availableWidth = window.innerWidth - 32,
    availableHeight = window.innerHeight - offsetHeight;
  var size = Math.min(availableWidth, availableHeight);
  this.paper.setSize( size, size );
  var boardMarginTop = (availableHeight - size) / 2;
  $('#board').css({ 'margin-top': boardMarginTop + 'px' });

  $('#game-page').css({
    'background-size': 'auto ' + (size/6) + 'px',
  });
  var size = size / 10;
  var minSize = 60;
  size = size < minSize ? minSize : size;
  var maxSize = 120;
  size = maxSize < size ? maxSize : size;
  $('#customMenu').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackRules').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackOptions').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
  $('#customBackAbout').css({
    'width': size+'px', 'height': size+'px',
    'background-size': size+'px ' + size+'px',
  });
};

Hmi.prototype.setupChallenge = function (tile, paper, challenge) {
  var colors = [
    'red', 'blue', 'darkblue', 'cyan', 'gray'
  ];
  var t = Hmi.challenge[challenge].tiles;
  for(var n=0; n<t.length; ++n) {
    var color = 0 == n ? 0 :
      1 == t[n].width && 2 == t[n].height ? 1 :
      2 == t[n].width && 1 == t[n].height ? 2 :
      3;
    tile[n] = paper.rect( t[n].x, t[n].y, t[n].width, t[n].height, 0.1).attr({
      fill: colors[color], stroke: 'gray', 'stroke-width': 0.03
    });
  }
};

Hmi.prototype.initBoard = function () {
  this.paper = Raphael( 'board', 400, 400);
  this.paper.setViewBox(-0.7, -0.2, 4.4, 5.4, false );
  this.paper.path( 'M-0.1,5.1L-0.1,5.1L-0.1,-0.1L4.1,-0.1L4.1,5.1z').attr({
    stroke: '#444', 'stroke-width': 0.2, 'stroke-linecap': 'round', fill: '#555'
  });
  this.paper.path( 'M0.9,5.1L-0.1,5.1L-0.1,-0.1L4.1,-0.1L4.1,5.1L3.1,5.1').attr({
    stroke: 'maroon', 'stroke-width': 0.2, 'stroke-linecap': 'round'
  });
  var c = localStorage.getItem('LAneRougeChallenge');
  this.challenge = null == c ? 0 : parseInt(c);
  this.tile = [];
  this.setupChallenge(this.tile, this.paper, this.challenge);
  for(var n=0; n<this.tile.length; ++n) {
    this.tile[n].drag( onDragMove, onDragStart, onDragEnd );
  }
  this.setHeader();
};

function onDragMove( dx, dy ) {
  var x = this.ox + (Math.abs(dx) > Math.abs(dy) ? dx/100 : 0),
    y = this.oy + (Math.abs(dx) > Math.abs(dy) ? 0 : dy/100),
    w = this.attr('width'),
    h = this.attr('height');
  y = y<0 ? 0 : ( y>(5-h) ? (5-h) : y);
  x = x<0 ? 0 : ( x>(4-w) ? (4-w) : x);
  y = Math.round(y * 8) / 8;
  x = Math.round(x * 8) / 8;
  if(x>=this.xmin && x<=this.xmax &&
    y>=this.ymin && y<=this.ymax) {
    this.attr({ x: x, y: y });
  }
};

function testRange(r, x, y, w, h) {
  var result = true;
  for(var n=0; n<g_Hmi.tile.length; ++n) {
    if (r != g_Hmi.tile[n]) {
      var t = {
        x: g_Hmi.tile[n].attr('x'),
        y: g_Hmi.tile[n].attr('y'),
        w: g_Hmi.tile[n].attr('width'),
        h: g_Hmi.tile[n].attr('height')
      };
      if ((((y >= t.y) && (y < t.y + t.h)) ||
         ((y+h > t.y) && (y+h <= t.y + t.h))) &&
         (((x >= t.x) && (x < t.x + t.w)) ||
         ((x+w > t.x) && (x+w <= t.x + t.w)))) {
        result = false;
      }
      if ((((t.y >= y) && (t.y < y + h)) ||
         ((t.y+t.h > y) && (t.y+t.h <= y + h))) &&
         (((t.x >= x) && (t.x < x + w)) ||
         ((t.x+t.w > x) && (t.x+t.w <= x + w)))) {
        result = false;
      }
    }
  }
  return result;
}

function onDragStart() {
  var w = this.attr('width'),
    h = this.attr('height');
  this.ox = this.attr('x');
  this.oy = this.attr('y');
  this.xmin = this.ox;
  for(; this.xmin>=0 && testRange(this, this.xmin, this.oy, w, h); this.xmin-=0.5) {}
  this.xmin+=0.5;
  this.xmax = this.ox;
  for(; this.xmax<=(4-w) && testRange(this, this.xmax, this.oy, w, h); this.xmax+=0.5) {}
  this.xmax-=0.5;
  this.ymin = this.oy;
  for(; this.ymin>=0 && testRange(this, this.ox, this.ymin, w, h); this.ymin-=0.5) {}
  this.ymin+=0.5;
  this.ymax = this.oy;
  for(; this.ymax<=(5-h) && testRange(this, this.ox, this.ymax, w, h); this.ymax+=0.5) {}
  this.ymax-=0.5;
};

function onDragEnd() {
  var x = Math.floor(this.attr('x') + 0.5),
    y = Math.floor(this.attr('y') + 0.5);
  x = x<0 ? 0 : ( x>this.xmax ? x-1 : x );
  x = x>3 ? 3 : x;
  y = y<0 ? 0 : ( y>this.ymax ? y-1 : y );
  y = y>4 ? 4 : y;
  this.attr({ x: x, y: y });
  this.toFront();
  var t = Hmi.challenge[g_Hmi.challenge].tiles;
  if(g_Hmi.tile[0].attr('x') == t[0].target.x &&
     g_Hmi.tile[0].attr('y') == t[0].target.y) {
    g_Hmi.animateStep1();
  }
};

Hmi.prototype.restoreInitialBoard = function () {
};

Hmi.prototype.update = function(board, actionInfo) {
  this.resize();
  this.board = board;
};

Hmi.prototype.animateStep1 = function() {
  var t = Hmi.challenge[this.challenge].tiles[0];
  var y = t.target.y + t.height/2;
  this.tile[0].animate({
    y: y,
    fill: 'red',
    opacity: 1.0
  }, 2000, this.animateStep2.bind(this));
};

Hmi.prototype.animateStep2 = function() {
  var t = Hmi.challenge[this.challenge].tiles[0];
  var y = t.target.y + t.height;
  this.tile[0].animate({
    y: y,
    fill: 'red',
    opacity: 0.0
  }, 1000, this.next.bind(this));
};

Hmi.prototype.unbindAllEvents = function ( elem ) {
  /*
   * elem.unclick( this.clickTarget.bind(this) ) not working
   */
  if (elem.events) {
    var n = elem.events.length;
    for(var j=0; j<n; ++j) {
      elem.events[j].unbind();
    }
    delete elem.events;
    console.log('- unbound ' + n + ' event(s) -');
  }
};

Hmi.prototype.init = function () {
  this.initBoard();
  var $window = $(window);
  $window.resize( this.resize.bind( this ) );
  $window.resize();
  $('#restart').on( 'click', this.restart.bind(this) );
  $('#next').on( 'click', this.next.bind(this) );
  $('#previous').on( 'click', this.previous.bind(this) );
  $('#random').on( 'click', this.random.bind(this) );
};

Hmi.prototype.restart = function() {
  this.updateChallenge();
  $( '#left-panel' ).panel( 'close' );
};

Hmi.prototype.next = function() {
  this.challenge = (this.challenge + 1) % Hmi.challenge.length;
  this.updateChallenge();
  $( '#left-panel' ).panel( 'close' );
};

Hmi.prototype.previous = function() {
  this.challenge = (this.challenge - 1 + Hmi.challenge.length ) % Hmi.challenge.length;
  this.updateChallenge();
  $( '#left-panel' ).panel( 'close' );
};

Hmi.prototype.random = function() {
  this.challenge = Math.floor(Math.random() * Hmi.challenge.length );
  this.updateChallenge();
  $( '#left-panel' ).panel( 'close' );
};

Hmi.prototype.updateChallenge = function() {
  for(var n=0; n<this.tile.length; ++n) {
    this.tile[n].remove();
  }
  this.tile = [];
  this.setupChallenge(this.tile, this.paper, this.challenge);
  localStorage.setItem('LAneRougeChallenge', '' + this.challenge);
  for(var n=0; n<this.tile.length; ++n) {
    this.tile[n].drag( onDragMove, onDragStart, onDragEnd );
  }
  this.setHeader();
};

Hmi.prototype.setHeader = function() {
  $('#myheader').html(
    "L'âne rouge : " +
    Hmi.challenge[this.challenge].id + ' : ' +
    Hmi.challenge[this.challenge].level
  );
};

Hmi.prototype.setCookie = function( cookieName, value, expirationInDays) {
  var d = new Date(Date.now() + expirationInDays*24*60*60*1000 );
  document.cookie = encodeURIComponent(cookieName) + '=' + encodeURIComponent(value) +
    ';expires=' + d.toUTCString() + ';path=/;samesite=lax;';
};

Hmi.prototype.getCookie = function( cookieName ) {
  var result = '';
  var name = cookieName + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i < cookieArray.length && '' == result; i++) {
    var c = cookieArray[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      result = c.substring(name.length, c.length);
    }
  }
  return decodeURIComponent(result);
};

var g_Hmi = new Hmi();
$(document).ready( function () { g_Hmi.init(); });
