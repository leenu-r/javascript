//Print the number of unique id's in the following tree
const tree = {
  id: "apple",
  children: [
    {
      id: "banana",
      children: [{ id: "apple" }, { id: "melon" }],
    },

    { id: "orange" },
  ],
};

const getCountOfUniqueIds = (tree) => {
  let uniqueIds = new Set();
  const traverseTree = (tree) => {
    for (const key in tree) {
      if (key === "id") {
        uniqueIds.add(tree[key]);
      } else if (key === "children") {
        for (const child of tree[key]) {
          traverseTree(child);
        }
      }
    }
  };

  traverseTree(tree);
  console.log(uniqueIds); //Set(4) { 'apple', 'banana', 'melon', 'orange' }
  return uniqueIds.size;
};

let totalUniqueIds = getCountOfUniqueIds(tree);
console.log(totalUniqueIds); //4


/*It uses a recursive approach and a Set data structure to efficiently collect and count the unique IDs.

The getCountOfUniqueIds function correctly traverses the tree and adds each encountered ID to the uniqueIds Set. The use of a Set ensures that only unique IDs are stored, filtering out duplicates automatically.

After traversing the tree, the function returns the size of the uniqueIds Set, which represents the count of unique IDs. The code then prints the Set itself and the total number of unique IDs, both of which match the expected output.

Overall, this solution is concise, efficient, and effectively handles the task of counting unique IDs in the given tree.*/

/*The time complexity of the code can be determined by considering the number of operations performed as a function of the input size. In this case, the input size is the total number of nodes in the tree.

The code traverses the tree by recursively visiting each node exactly once. Let's denote the number of nodes in the tree as n.

Traversing the Tree:
The recursive function traverseTree is called for each node in the tree. Therefore, the number of times the recursive function is called is directly proportional to the number of nodes in the tree, which is n. This operation has a time complexity of O(n).

Adding IDs to the Set:
The code checks each node's ID and adds it to the uniqueIds Set. The time complexity of adding an element to a Set is typically considered O(1) on average. Since this operation is performed for each node in the tree, which is n times, the overall time complexity for this step is O(n).

Returning the Size of the Set:
The code retrieves the size of the uniqueIds Set using the size property. The size of a Set can be obtained in O(1) time.

Therefore, the dominant factor in the time complexity is the tree traversal, which has a time complexity of O(n). The other operations, such as adding IDs to the Set and retrieving the size of the Set, have a constant time complexity and do not significantly affect the overall time complexity.

In conclusion, the time complexity of the code is O(n), where n is the total number of nodes in the tree. This means that the time required to count the number of unique IDs increases linearly with the size of the tree. */