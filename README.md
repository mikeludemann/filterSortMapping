# filterSortMapping

Simple function to filter and sorting and mapping some data

## Examples

```HTML
<div id="a1"></div>
```

```JS
let cities = [
	{name: 'Berlin', population: 3748148},
	{name: 'Hamburg', population: 1891810},
	{name: 'Munich', population: 1471508},
	{name: 'Cologne', population: 1085664}
];

const x = (city) => city.population < 3000000;
const y = (c1, c2) => c1.population < c2.population;
const z = (city) => city.name + ': ' + city.population + '<br />';

var element = document.getElementById("a1");

element.innerHTML = filterSortMapping(cities, true, x,y,z);
```
