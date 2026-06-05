// si importa l'unica cosa export default nel modulo
// con un nome qualsiasi e senza parentesi graffe
import abc from "./modulo2.js";

console.log(abc);

import * as mod from "./modulo2.js";
console.log(mod);
mod.f1();
console.log(mod.f1);
console.log(mod.default);
