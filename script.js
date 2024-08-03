const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function makeFilteredFruitsArray(str) {
	let results = [];

	if (str !== ''){
		for (fruit of fruits){
			if (fruit.toLowerCase().includes(str)){
				results.push(fruit);
			}
		}
	}

	return results;
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function searchHandler(e) {
	let string = e.target.value.toLowerCase();
	let arrayForUl = makeFilteredFruitsArray(string);
	if (suggestions){
		removeAllChildNodes(suggestions);
		for (value of arrayForUl){
			let newLi = document.createElement('li');
			newLi.appendChild(document.createTextNode(value))
			suggestions.appendChild(newLi);
		}
	}
}

function useSuggestion(e) {
	input.value = e.target.innerHTML;
	removeAllChildNodes(suggestions);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);