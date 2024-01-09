# About TS

TypeScript - это язык программирования, разработанный Microsoft. Он является суперсетом языка JavaScript, что означает, что любой код на JavaScript может быть написан на TypeScript без каких-либо изменений. TypeScript был представлен в 2012 году, и его создание связано с необходимостью добавления статической типизации к JavaScript, чтобы повысить его надежность и улучшить инструменты разработчиков. TypeScript позволяет разработчикам использовать новейшие возможности ECMAScript, такие как типы переменных, классы, интерфейсы и другие, а также предоставляет инструменты для статического анализа кода и обеспечения безопасности типов. С появлением TypeScript он был принят командами разработчиков по всему миру и активно используется в крупных проектах. Он также является основой для разработки фреймворков, таких как Angular.

# Data Type in TS

## 1) Primitives

1. ### number

```typescript
let age: number = 25;
let quantity: number = 10;
let temperature: number = -5;
```

2. ### string

```typescript
let str: string = "Hello world";
```

3. ### boolean

```typescript
let abc: boolean = true | false;
```

4) ### void
   Тип данных `void` в TypeScript используется для обозначения отсутствия возвращаемого значения из функции. Он указывает, что функция не возвращает никакого значения.

Пример 1:

```typescript
function sayHello(): void {
  console.log("Привет!");
}
sayHello(); // Отображает "Привет!" в консоли, но не возвращает значение.
```

Пример 2:

```typescript
function showAlert(): void {
  alert("Важное сообщение!");
}
showAlert(); // Выводит всплывающее окно с важным сообщением, но не возвращает значение.
```

Пример 3:

````typescript
function performAction(): void {
  // Выполнять действие
  // ...
  return;
}
performAction(); // Функция выполняет определенное действие, но не возвращает значение.

Тип `void` особенно полезен, когда функция не имеет никакого смысла возвращать конкретное значение и просто выполняет определенные действия или операции.

Однако, стоит отметить, что `void` является специфичным для TypeScript и отсутствует в JavaScript. В контексте JavaScript вместо `void` функции просто не возвращают никакого значения, поскольку JavaScript не требует явного указания типов данных.


5) null
В TypeScript тип данных `null` используется для обозначения отсутствия значения или пустого значения. Он представляет специальное значение, которое указывает на отсутствие ссылки на объект.

Примеры:

1. Объявление переменной с типом `null`:
```typescript
let person: null = null;
````

2. Возвращение значения `null` из функции:

```typescript
function getUser(): null {
  // Логика получения пользователя
  // ...
  return null;
}
```

3. Использование значения `null` в условных выражениях:

```typescript
let age: number | null = getAge(); // Получение возраста, которое может быть null
if (age === null) {
  console.log("Возраст неизвестен");
} else {
  console.log("Возраст:", age);
}
```

Тип `null` используется для указания отсутствия значения, и он может применяться как для переменных, так и для возвращаемых значений из функций.

````

6) undefined
Тип данных "undefined" в TypeScript используется для представления отсутствия значения. Он может быть присвоен переменным, которые еще не были инициализированы. Также он может быть использован в качестве возвращаемого значения функции, если она не возвращает никакого значения. Например:
```typescript
````

```typescript
let x: number | undefined;
console.log(x);
```

7) ### never

Тип данных "never" в TypeScript представляет собой тип, значения которого никогда не произойдет.
Он используется, когда функция не завершается нормально (например, всегда бросает ошибку или имеет бесконечный цикл).
Тип "never" также может быть возвращен из функции, которая никогда не завершается или всегда выбрасывает ошибку.
Этот тип полезен для сигнализации о том, что функция должна всегда приводить к ошибке или бесконечному циклу.
Примеры использования типа "never" включают функции, бесконечно выполняющиеся циклы и функции, всегда выбрасывающие ошибки.

Примеры:

```typescript
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // бесконечный цикл
  }
}
let x: never = error("Something went wrong"); // присваивание значения типа "never"
```


# 2)  Objects

1) ### Array 
В TypeScript тип данных "array" используется для представления массивов - упорядоченных коллекций элементов одного типа.
Тип "array" можно указать, используя синтаксис: `тип[]` (например, `number[]` для массива чисел) или `Array<тип>` (например, `Array<string>` для массива строк).
Массивы в TypeScript могут содержать элементы одного определенного типа, а также быть объединенными с использованием оператора | для представления массивов с разными типами элементов.
Для объявления и инициализации массива в TypeScript можно использовать следующий синтаксис: `let arr: тип[] = [элемент1, элемент2, ...];`.
Примеры использования типа "array" включают массивы чисел, строк, объектов и других типов данных.
```typescript 
let numbers: number[] = [1, 2, 3, 4, 5]; // массив чисел
let names: string[] = ["Alice", "Bob", "Charlie"]; // массив строк
let students: Array<{id: number, name: string}> = [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]; // массив объектов
```

2) ### Class 
В TypeScript класс является типом данных, который позволяет определить структуру и поведение объектов. Классы позволяют объединить свойства (переменные) и методы (функции), связанные с определенным объектом, в одну сущность.

Примеры классов в TypeScript:

1. Класс "Пользователь" может иметь свойства, такие как "имя", "фамилия" и "возраст", а также методы, такие как "войти в систему" и "изменить пароль".

```typescript
class User {
  private firstName: string;
  private lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  login() {
    // Логика входа в систему
  }

  changePassword() {
    // Логика изменения пароля
  }
}
```

2. Класс "Автомобиль" может иметь свойства, такие как "марка", "модель" и "год выпуска", а также методы, такие как "завести двигатель" и "переключить передачу".

```typescript
class Car {
  private brand: string;
  private model: string;
  private year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    // Логика запуска двигателя
  }

  shiftGear() {
    // Логика переключения передачи
  }
}
```

3. Класс "Продукт" может иметь свойства, такие как "название", "цена" и "количество на складе", а также методы, такие как "установить скидку" и "изменить количество".

```typescript
class Product {
  private name: string;
  private price: number;
  private stockQuantity: number;

  constructor(name: string, price: number, stockQuantity: number) {
    this.name = name;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }

  setDiscount(discount: number) {
    // Логика установки скидки на продукт
  }

  changeQuantity(quantity: number) {
    // Логика изменения количества продуктов на складе
  }
}
```

3) ### interface 
Interface в TypeScript представляет собой механизм для определения структуры объекта или класса. Он позволяет задать набор свойств и их типов, а также опциональные или обязательные поля. Интерфейсы также могут содержать методы, которые должны быть реализованы классом, реализующим интерфейс.

Пример 1:
```typescript
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}

const john: Person = {
  name: "John",
  age: 25,
  sayHello: () => console.log("Hello!")
};
```

Пример 2:
```typescript
interface User {
  username: string;
  password: string;
  isAdmin?: boolean; // Опциональное поле
}

function login(user: User) {
  // ...
}

const alice: User = {
  username: "alice",
  password: "123456"
};

login(alice);
```

Пример 3:
```typescript
interface Animal {
  type: string;
  sound(): void;
}

class Dog implements Animal {
  type = "dog";
  sound() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.sound(); // Выводит "Woof!"
```

Это всего лишь некоторые примеры использования интерфейсов в TypeScript. Они позволяют более точно определить ожидаемую структуру данных и улучшить проверку типов во время разработки.

4) ### tuple
В TypeScript, кортеж (tuple) является типом данных, позволяющим хранить набор элементов различных типов, упорядоченных по позиции. Он похож на массив, но имеет фиксированное число элементов.

Пример 1: 
```typescript
let person: [string, number, boolean] = ['John', 25, true];
В данном примере переменная person имеет тип кортежа, содержащего имя (строка), возраст (число) и флаг, указывающий на то, что человек является активным (булево значение).

Пример 2:
let point: [number, number] = [10, 5];
Здесь переменная point является кортежем с двумя элементами, представляющими координаты x и y точки.

Пример 3:
let student: [string, number, boolean, string[]] = ['Alice', 20, true, ['Math', 'History']];
В данном случае кортеж student имеет тип, содержащий имя (строка), возраст (число), флаг, указывающий на активность студента, и массив предметов (строки), которые он изучает.
```
Кортежи полезны, когда нужно хранить наборы значений разных типов, но с фиксированным числом элементов и известными позициями.

5)  ### enum 
Enum в TypeScript - это тип данных, который позволяет определить набор именованных значений. Он используется для создания ограниченного списка значений, которые могут быть использованы в качестве альтернативных вариантов. Например, enum может быть использован для определения списка дней недели:

```typescript
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const today: DaysOfWeek = DaysOfWeek.Monday;
```
В данном примере enum DaysOfWeek определяет список дней недели, а today переменной присваивается значение "Понедельник".

2. Можно явно присваивать значения элементам enum:
```typescript
enum Colors {
  Red = 1,
  Green = 2,
  Blue = 4
}

let color: Colors = Colors.Green;
console.log(color); // Вывод: 2
```

3. Enum значения могут быть использованы в условных операторах:
```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function move(direction: Direction) {
  if (direction === Direction.Up) {
    console.log("Moving up");
  } else if (direction === Direction.Down) {
    console.log("Moving down");
  } else if (direction === Direction.Left) {
    console.log("Moving left");
  } else if (direction === Direction.Right) {
    console.log("Moving right");
  }
}

move(Direction.Up); // Вывод: Moving up
```

6) ### function 
Тип данных function в TypeScript представляет собой тип, который позволяет определить переменную как функцию. Он указывает, что данная переменная будет хранить функцию и может принимать и возвращать аргументы. Применение типа function позволяет сделать код более читабельным и безопасным при разработке в среде TypeScript.

Пример 1: 

```typescript
const sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
```

В данном примере тип функции определен как `(a: number, b: number) => number`, что означает, что функция принимает два аргумента типа number и возвращает значение типа number.

Пример 2:

```typescript
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => {
  return a + b;
};
```

Здесь мы создали пользовательский тип `AddFunction`, который представляет функцию, принимающую два аргумента типа number и возвращающую значение типа number. Переменная `add` типизирована этим пользовательским типом.

Пример 3:

```typescript
const greet: () => void = () => {
  console.log("Hello!");
};
```

В данном примере тип функции определен как `() => void`, что означает, что функция не принимает аргументов и не возвращает никакого значения (void). Внутри функции выводится приветствие в консоль.


# What is the difference between Interface, Tuple, Enum ?

1) Разница между типами данных interface, tuple и enum в TypeScript:
Факты:
- Interface это способ описания структуры объекта или класса. Он представляет собой набор свойств и их типов.
- Tuple представляет собой упорядоченный набор фиксированной длины элементов, где каждый элемент может иметь свой собственный тип.
- Enum используется для определения набора именованных констант.
- Interface может быть использован для определения контракта между классами.
- Tuple позволяет описывать структуру данных с известным количеством элементов, где каждый элемент имеет свой тип.
- Enum предоставляет удобный способ для работы с наборами именованных значений.
- Interface может наследоваться от других интерфейсов.
- Tuple может использоваться для определения массивов с фиксированной структурой.
- Enum может иметь числовые значения или быть строковыми типами.
- Interface может содержать методы, свойства и значения по умолчанию.


Примеры:
1. Interface:
```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 25
};
```

2. Tuple:
```typescript
let tuple: [string, number, boolean] = ["hello", 10, true];
```

3. Enum:
```typescript
enum Colors {
  Red = 1,
  Green = 2,
  Blue = 3
}

const color: Colors = Colors.Red;
console.log(color); // Output: 1
```

4. Interface наследование:
```typescript
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const square: Square = {
  color: "red",
  sideLength: 10
};
```

5. Tuple в массиве:
```typescript
let array: [string, number][] = [
  ["a", 1],
  ["b", 2]
];
```

2) Общие черты между типами данных interface, tuple и enum в TypeScript:
Факты:
- Все три типа данных могут быть использованы для определения структуры данных и их типов.
- Все три типа данных могут содержать свойства и значения.
- Interface и tuple могут быть использованы для определения контракта между компонентами.
- Interface и enum могут быть наследованы друг от друга.
- Interface, tuple и enum могут содержать значения по умолчанию.
- Interface может использоваться для описания классов и объектов, tuple - для определения массивов с фиксированной структурой, а enum - для определения наборов именованных констант.

Примеры:
1. Interface:
```typescript
interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
```

2. Tuple:
```typescript
let tuple: [string, number, boolean] = ["hello", 10, true];
```

3. Enum:
```typescript
enum Shapes {
  Circle = "circle",
  Square = "square",
  Triangle = "triangle"
}

const shape: Shapes = Shapes.Circle;
console.log(shape); // Output: "circle"
```

4. Interface наследование:
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Max",
  breed: "Labrador"
};
```

5. Tuple в массиве:
```typescript
let array: [string, number][] = [
  ["a", 1],
  ["b", 2]
];
```



## Task with Interface
```typescript
interface types {
    id: number;
    name: string;
  }
function findUniqueElements(arr: types[]) {
    let uniq: { [key: number]: types } = {};
    arr.forEach((obj) => {
      uniq[obj.id] = obj;
    });
    return Object.values(uniq);
}
console.log(
    findUniqueElements([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 1, name: "Jim" },
    ])
  );
```

## Task with enum
```typescript
enum Types {
    John = 1,
    Jane = 2,
    Jim = 1
}

function findUniqueElements(arr: Types[]): Types[] {
    let uniq: { [key: number]: Types } = {};
    arr.forEach((obj) => {
        uniq[obj] = obj;
    });
    return Object.values(uniq);
}

console.log(
    findUniqueElements([Types.John, Types.Jane, Types.Jim])
);
```

## Task with tuple 
```typescript
type Types = [number, string];

function findUniqueElements(arr: Types[]): Types[] {
    let uniq: { [key: number]: Types } = {};
    arr.forEach((obj) => {
        uniq[obj[0]] = obj;
    });
    return Object.values(uniq);
}

console.log(
    findUniqueElements([
        [1, "John"],
        [2, "Jane"],
        [1, "Jim"],
    ])
);
```