// ================================================================================================
// Typescript Handbook - Object types
// documentation: https://www.typescriptlang.org/docs/handbook/2/objects.html
// ================================================================================================

// -----------------------------------------------------------------------------------------------
// Anonymous object types
// -----------------------------------------------------------------------------------------------
function greet(person: { name: string; age: number }) {
  return `Hello ${person.name}`
}

// -----------------------------------------------------------------------------------------------
// Interface
// -----------------------------------------------------------------------------------------------
interface IPerson {
  name: string;
  age: number;
}

function greet2(person: IPerson) {
  return `Hello ${person.name}`
}

// -----------------------------------------------------------------------------------------------
// Type alias
// -----------------------------------------------------------------------------------------------
type Person = {
  name: string;
  age: number;
}

function greet3(person: Person) {
  return `Hello ${person.name}`
}

// -----------------------------------------------------------------------------------------------
// Optional properties
// -----------------------------------------------------------------------------------------------
interface PaintOptions {
  shapeType: string;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos || 0;
  let yPos = opts.yPos || 0;
  console.log(`paint shape ${opts.shapeType} at ${xPos}, ${yPos}`);
}

paintShape({ shapeType: 'circle' });
paintShape({ shapeType: 'circle', xPos: 10, yPos: 20 });

function paintShape2({shapeType, xPos = 0, yPos = 0}: PaintOptions) {
  console.log(`paint shape ${shapeType} at ${xPos}, ${yPos}`);
}

paintShape2({ shapeType: 'circle' });
paintShape2({ shapeType: 'circle', xPos: 10, yPos: 20 });

// -----------------------------------------------------------------------------------------------
// readonly property
// -----------------------------------------------------------------------------------------------
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // Error
  // obj.prop = 'something else';
}

// -----------------------------------------------------------------------------------------------
// Index signatures
// -----------------------------------------------------------------------------------------------

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];
const secondItem = myArray[1];

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

const numberDictionary: NumberOrStringDictionary = {
  length: 10,
  name: "test",
  // Error
  // isItGood: true,
}


// -----------------------------------------------------------------------------------------------
// Type extension
// -----------------------------------------------------------------------------------------------
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// -----------------------------------------------------------------------------------------------
// Intersection types
// -----------------------------------------------------------------------------------------------
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}
draw({ color: "red", radius: 10 });

// -----------------------------------------------------------------------------------------------
// Interfaces vs. Intersections
// 
// The principle difference between the two is how conflicts are handled, and that difference is
// typically one of the main reasons why you’d pick one over the other between an interface and
// a type alias of an intersection type.
// -----------------------------------------------------------------------------------------------

// TODO

// -----------------------------------------------------------------------------------------------
// Generic Object Types
// -----------------------------------------------------------------------------------------------
interface Box {
  contents: any;
}

let x: Box = {
  contents: "hello",
}

console.log((x.contents as string).toLowerCase());


interface Box2<T> {
  contents: T;
}

type Box3<T> = {
  contents: T;
}

let box: Box2<string> = {
  contents: "hello",
}

interface Apple {
  color: string;
  weight: number;
}

type AppleBox = Box2<Apple>;

// Generic functions
function setContents<T>(box: Box2<T>, newContents: T) {
  box.contents = newContents;
}

// -----------------------------------------------------------------------------------------------
// Array type
// 
// number[] and Array<number> are the same
//
// Array is a generic type
// interface Array<Type> {
//  ...
// }
//
// Other generic data structures:
//  Map<K, V>
//  Set<T>
//  Promise<T>
// -----------------------------------------------------------------------------------------------

function arrayFunc(value: Array<string>) {
  console.log(value);
}

let myArray2: string[] = ["Bob", "Fred"];

arrayFunc(myArray2);
arrayFunc(new Array("a", "b"));

// Tuple

type StringNumberPair = [string, number];
function tupleFunction(pair: [string, number]) {
  const a = pair[0];
  const b = pair[1];
  // const c = pair[2]; // Error
  console.log(`TUPLE: ${a} ${b}`);
}

