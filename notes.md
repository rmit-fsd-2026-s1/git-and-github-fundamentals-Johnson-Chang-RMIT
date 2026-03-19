

My prompt to reduce examples: 

============================================================================== 
Go to W2/lectorial02
Read through example1 to example6
My teacher give wants us to learn from examples . but it's too much. I'm a begineer and 
I need you to look through examples and take out what I have to learn, take out what's new and what's add for each new example and intergrate them and put it into example_big. I want you to put everything I need to learn into example_big so when I read and learn W2/lectorial02/example_big, I'll already know everything in example for W2.
Assume that I only know {
W1/lectorial01/example_big
} 




====================================================================

<!-- Start of W1 -->
Component names start with a capital letter (App, Header, UserCard)
Why? React uses capitals to tell “this is a component” vs “this is an HTML tag”.
component takes props(inputs)
JSX can “inject” JS values using { ... }
```js
function Greeting(props) {
  return (
    <p>
      Hi {props.name}!
    </p>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Johnson" />
    </div>
  );
}
// return one top level parent(no two siblings), inject js value using {...}
function Header() {
  return (
    <header>
      <h1>Gretting</h1>
    </header>
  );
}
function App() {
  const name = "Johnson";
  return (
    <div>
        <Header />
        <p>Hello {name}</p>
    </div>
  );
}
// <Header /> = <Header></Header> means call Header()

export default App; 
// lets other files import it

// common page sturcture is:
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}



function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  const fruitItems = fruits.map(function (fruit) {
    return (
      <li key={fruit}>
        {fruit}
      </li>
    );
  });

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruitItems}
      </ul>
    </div>
  );
}
// <li> means list item, must live inside <ul> (bullet)or <ol>.
// The result of map() is a new array.
// So fruitItems becomes:
// [<li key="Apple">Apple</li>,
//   <li key="Banana">Banana</li>,
//   <li key="Cherry">Cherry</li>]

// _app.tsx is like a global wrapper for the whole website.
// Example site structure:
// /home
// /about
// /contact
// Pages:
// pages/index.tsx
// pages/about.tsx
// pages/contact.tsx

// <Layout>
//   <Component {...pageProps} />
// </Layout> 
// <AuthProvider>
//   <Component />
// </AuthProvider> 
// <Analytics>
//   <Component />
// </Analytics>
// <ErrorBoundary>
//   <Component />
// </ErrorBoundary>
// <Suspense fallback={<div>Loading...</div>}>
//   <Component />
// </Suspense>

export default function Home() {
  const [count, setCount] = useState<number>(0);
  // make sure it's always a number <number>
  // or state = useState(0)
  // count = state[0]
  // setCount = state[1] 

  // React state must be changed through React, not directly. 
  // use setCount(newCount) to update the state. React sees the update and triggers re-render.

  // Bad: React updates are sometimes batched.
  // setCount(count + 1)
  // setCount(count + 1)
  // Both might use the same old value.

  // But with prev:
  // setCount(prev => prev + 1)
  // setCount(prev => prev + 1)
  // React guarantees correct order.

  return (
    <div>
      <h1>Example: TV Shows + Counter</h1>

      {/* FROM EXAMPLE 3: One parent <div> wraps everything (JSX rule). */}

      {/* FROM EXAMPLE 4: onClick={handleAlertClick} — pass the function, no () so it runs on click. */}
      <button onClick={handleAlertClick}>Click for alert</button>

      {/* FROM EXAMPLE 5: Show state in JSX. When count changes, this number updates. */}
      <p>Counter: {count}</p>
      {/* FROM EXAMPLE 5: Inline arrow function. () => setCount(...) runs when button is clicked. */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      {/* FROM EXAMPLE 3: Composing components. Home assembles Search and Shows. */}
      <Search />
      <Shows />
    </div>
  );
```
<!-- End of W1 -->
==================================================
<!-- Start of W2 Lab-->

static site generation, and API routes built-in.
1. Open command prompt or terminal.
2. Run the following command:
```bash
npx create-next-app@latest my-app
```
<!-- my-app is your own project name -->
3. When prompted, select the following options:
√ Would you like to use the recommended Next.js defaults? » No, customize settings
√ Would you like to use TypeScript? ... Yes
√ Which linter would you like to use? » ESLint
√ Would you like to use React Compiler? ...  Yes
√ Would you like to use Tailwind CSS? ...  Yes
√ Would you like your code inside a `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... No
<!-- we use app router in Assi 2 not Assi 1-->
√ Would you like to customize the import alias (`@/*` by default)? ... No 

4. Once completed, run:
```bash
cd my-app npm
run dev
```
5. Open http://localhost:3000 in your browser. If you see the Next.js welcome page, the setup is
complete.

When you change package.json (dependency)
reload the libaray
```bash
npm install
```

run the project 
```bash

npm run dev
```
TS function
```ts
// Function with type annotations
function calculateArea(width: number, height: number): number { return width * height;
}
// ): number ): string this define what the function must output
console.log(calculateArea(5, 10))
// Arrow function with type annotations 
const greet = (name:string): string => {
 return `Hello, ${name}!`;
};

console.log(greet("Johnson"))
// Try calling these functions with different types of arguments
// and observe TypeScript's error messages
```

<!-- End of W2 Lab-->

==================================================

<!-- Start of W2 Lec -->

Component composition.
```ts
function Header() {
  return <h1>Website</h1>
}
function Footer() {
  return <p>Copyright</p>
}

// You combine them inside another component:

function Page() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}
```
Use it multiple times:
```ts
function Button({ text }) {
  return <button>{text}</button>
}

function App() {
  return (
    <div>
      <Button text="Save" />
      <Button text="Delete" />
      <Button text="Cancel" />
    </div>
  )

}
```

Typical React layout:

App
 ├─ Header
 ├─ Sidebar
 ├─ Content
 │   ├─ Article
 │   ├─ Comments
 │   └─ RelatedPosts
 └─ Footer

Props (Properties)
Props are read-only.

Data storage
Temporary → JS variables
Persistent → localStorage
Permanent → databases

localStorage only stores strings.
So objects must be converted to JSON.
```ts
const user = {
  name: "Sara",
  age: 22
}
localStorage.setItem("user", JSON.stringify(user))
// Retrieve object:
const storedUser = JSON.parse(localStorage.getItem("user"))
console.log(storedUser.name) //Sara
```

IF username exists -> loged in already ->show logout button(to log out)
ELSE -> show login(to log in)

```ts
{username ? <LogoutButton /> : <LoginButton />}
```

Return nothing: void
```ts
const handleClick = (name: string): void => {
  alert(name);
};
```

Three ways to get a value from an object
```ts
// With TypeScript type annotation:
const person: { name: string; age: number } = { name: "Johnson", age: 20 };

// Way 1: destructuring
const { name } = person;
console.log(name);        // "Johnson" ✅
const { name : rename } = person;
console.log(rename);      // "Johnson" ✅

// Way 2: dot notation
const get_name = person.name;
console.log(get_name);    // "Johnson" ✅

// Way 3: bracket notation
const get_name2 = person["name"];
console.log(get_name2);   // "Johnson" ✅
const key = "name";
console.log(person[key]);  // "Johnson" ✅
console.log(person.key);   // undefined ❌ (looks for key called "key")

function PersonCard({ name, age }: { name: string; age: number }) {
  return <p>{name} - {age >= 18 ? "adult" : "not adult"}</p>
}

//use it
PersonCard(person)                // direct JS call
<PersonCard name="Johnson" age={20} />  // React way

```


useEffect
```ts

useEffect(() => { ... }, [])        // runs ONCE when TV turns on
useEffect(() => { ... }, [tasks])   // runs every time 'tasks' changes
// tasks = []              → runs
// tasks = [buy milk]      → runs
// tasks = [buy milk, eggs]→ runs
useEffect(() => { ... })            // runs on EVERY render (no box at all)
// tasks changes  → runs
// users changes  → runs
// user logs in   → runs
// anything at all→ runs
```