var Books = [
    { id: "1", name: "a", author: "a", genres: ["a"], publishDate: "a", description: "a", price: { currency: "a", amont: 1 } },
    { id: "2", name: "b", author: "b", genres: ["b"], publishDate: "b", description: "b", price: { currency: "b", amont: 2 } },
    { id: "3", name: "c", author: "c", genres: ["c"], publishDate: "c", description: "c", price: { currency: "c", amont: 3 } }
];
function getAllBooks(Books) {
    return Books;
}
console.log(getAllBooks(Books));
function addProject(ObjectList, newObject) {
    ObjectList.push(newObject);
    return ObjectList;
}
var Bookss = [
    { id: "1", name: "a", author: "a", genres: ["a"], publishDate: "a", description: "a", price: { currency: "a", amont: 1 } },
    { id: "2", name: "b", author: "b", genres: ["b"], publishDate: "b", description: "b", price: { currency: "b", amont: 2 } },
    { id: "3", name: "c", author: "c", genres: ["c"], publishDate: "c", description: "c", price: { currency: "c", amont: 3 } }
];
var newObject = { id: "4", name: "d", author: "d", genres: ["d"], publishDate: "d", description: "d", price: { currency: "d", amont: 4 } };
var updatedObjects = addProject(Bookss, newObject);
console.log(updatedObjects);
// bai4
function deleteObject(ObjectList, id) {
    return ObjectList.filter(function (Object) { return Object.id !== id; });
}
Object = [
    { id: "1", name: "a", author: "a", genres: ["a"], publishDate: "a", description: "a", price: { currency: "a", amont: 1 } },
    { id: "2", name: "b", author: "b", genres: ["b"], publishDate: "b", description: "b", price: { currency: "b", amont: 2 } },
    { id: "3", name: "c", author: "c", genres: ["c"], publishDate: "c", description: "c", price: { currency: "c", amont: 3 } }
];
updatedObjects = deleteObject(Object, "2");
console.log(updatedObjects);
