var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
	animal = 'Zielone słonie';

animalUpperCased = animal.toUpperCase();
console.log(animalUpperCased);

var jednakZieloneSlonie = text.replace('Papugi', animalUpperCased);
console.log(jednakZieloneSlonie);

console.log(jednakZieloneSlonie.slice(0,jednakZieloneSlonie.length/2));