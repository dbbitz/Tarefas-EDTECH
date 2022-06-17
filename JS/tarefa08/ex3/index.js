const objeto1 = {};
objeto1['Atributo com espaços'] = 1;
console.log(objeto1);

const objeto2 = {};
Object.defineProperty(objeto2, 'Atributo com espaços' ,{value:1});
console.log(objeto2);