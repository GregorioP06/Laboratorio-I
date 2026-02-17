// con * si importa tutto e si da un nome al modulo
import * as mod from "./modulo.js";

console.log(mod.f2());
let x = mod.PI;
console.log(x);

// si sceglie cosa importare
import { f2 as f } from "./modulo.js";
console.log(f());
