// bai 1
interface Object {
  id:string,
  name:string,
  author:string,
  genres:string[],
  publishDate: string,
  description: string,
  price: {currency:string, amont:number },
}

const Books : Object[] = [
    {id:"1",name:"a",author:"a",genres:["a"],publishDate:"a",description:"a",price:{currency:"a",amont:1}},
    {id:"2",name:"b",author:"b",genres:["b"],publishDate:"b",description:"b",price:{currency:"b",amont:2}},
    {id:"3",name:"c",author:"c",genres:["c"],publishDate:"c",description:"c",price:{currency:"c",amont:3}}
];

function getAllBooks(Books: Object[]): Object[] {
    return Books;
}
 console.log(getAllBooks(Books));

// bai 3

interface Object {
  id:string,
  name:string,
  author:string,
  genres:string[],
  publishDate: string,
  description: string,
  price: {currency:string, amont:number },
}

function addProject(ObjectList: Object[], newObject: Object): Object[] {
  ObjectList.push(newObject);
  return ObjectList;
}

const Bookss : Object[] = [
    {id:"1",name:"a",author:"a",genres:["a"],publishDate:"a",description:"a",price:{currency:"a",amont:1}},
    {id:"2",name:"b",author:"b",genres:["b"],publishDate:"b",description:"b",price:{currency:"b",amont:2}},
    {id:"3",name:"c",author:"c",genres:["c"],publishDate:"c",description:"c",price:{currency:"c",amont:3}}
];

const newObject : Object ={id:"4",name:"d",author:"d",genres:["d"],publishDate:"d",description:"d",price:{currency:"d",amont:4}};

const updatedObjects = addProject(Bookss, newObject);
console.log(updatedObjects);

// bai4

function deleteObject (ObjectList: Object[], id:string):Object[]{
  return ObjectList.filter(Object => Object.id !== id);
}

Object = [
    {id:"1",name:"a",author:"a",genres:["a"],publishDate:"a",description:"a",price:{currency:"a",amont:1}},
    {id:"2",name:"b",author:"b",genres:["b"],publishDate:"b",description:"b",price:{currency:"b",amont:2}},
    {id:"3",name:"c",author:"c",genres:["c"],publishDate:"c",description:"c",price:{currency:"c",amont:3}}
];

updatedObjects = deleteObject(Object, "2");
console.log(updatedObjects);








