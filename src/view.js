export const renderItems = (data) => {
// console.log(data)
// Aquí comienza tu código y puedes retornar lo que tu necesites
// return 'example';
let listadeTarjetas = ""
for (let i = 0; i < data.length; i++) {
const content = data[i];

listadeTarjetas += `
<li class="estilo-tarjetas">
<dl itemscope itemtype="wonderwoman">
<img class="estilo-imagen" src="${content.imageUrl}">
<dt>Nombre: </dt><dd itemprop="name">${content.name}</dd>
<dt>Descripción: </dt><dd itemprop="description">${content.shortDescription}</dd>
<dt>Año de nacimiento: </dt><dd itemprop="yearOfBirth">${content.facts.yearOfBirth}</dd>
<dt>Lugar de nacimiento: </dt><dd itemprop="birthPlace">${content.facts.birthPlace}</dd>
<dt>Campo de desempeño: </dt><dd itemprop="mainField">${content.facts.mainField}</dd>
</dl>
</li>`;
}
return `<ul>${listadeTarjetas}</ul>`;

}



