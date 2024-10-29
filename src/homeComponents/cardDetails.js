import graph from "./images/pathfinding.jpg";
import primes from "./images/primes.jpg";
import sort from "./images/recursion.jpg";
import Sort from "./sort.jpg";

import binSearch from "./images/binary.png";

export function getDetails(){
   return [
        {
            id:1,
            title:"Pathfinder",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:graph
        },
    
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:Sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
   
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       },
  

   ]
}