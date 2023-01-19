let name: string
union | symbol allows for mulitple types
let age: number | string
let isStudent: boolean
let hobbies: string[]
 tuple fixed amount of value of diff types in array
 let role: [number, string]

use type or Interface to define objects
 type Person = {
   name: string
   age?: number
 }

 Differences between Type & Interface
 syntax interface Object {} type Object = {}
 Object can inherit keys from another Obj 
 Type- type Object = Object & {}
 Interface- interface Object extends Object {}

declare function type
 let printName: Function
 let printName: (name: string) => string | number
 let person: unknown

 let person: Person = {
   name: "Paolo",
 }

array of persons objects
 let lotsofPeople: Person[]

 useState example
    [example, setExample] = useState<string | number>("")

passing down props
    interface Props {
        example: string
        function: React.Dispatch<React.SetStateAction<string>> *you can hover the function in parent component to get syntax of function*
    }
    on the child - ({ example, function: Props }) or React.FC<Props>
