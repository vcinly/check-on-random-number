export const RomanNumber = ["I",
	"II",
	"III",
	"IV",
	"V",
	"VI",
	"VII",
	"VIII",
	"IX",
	"X",]
const num = ["0",'1','2','4','5','6','7','8','9']

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

function nonRepeatList(digit, list) {
	let number = getRandomInt(10 ** (digit-1), 10 ** digit)
	if (list.includes(number)) {
		nonRepeatList(digit, list)
	} else {
		list.push(number)
	}
}

export function randomList(digits=5) {
	let step = 0
	let list = []
	for (step = 0; step < 10; step++) {
		let digit =  Math.ceil(Math.random()*digits)
		nonRepeatList(digit, list)
	}
	return list
}

function integerToTriplets(num) {
	let triplets = []

	while (num > 0) {
		triplets.push(num % 1000)
		num = Math.floor(num / 1000)
	}
	return triplets
}

function append(arr, ...items) {
	items.forEach(function (item) {
		arr.push(item);
	});
	return arr
}

function sprintf(str, ...items) {
	items.forEach(function (item) {
		str = str.replace(/%s/, item)
	});
	return str
}


export function IntegerToFrFr(input) {
	let frenchMegas = ["", "mille", "million", "milliard", "billion", "billiard", "trillion", "trilliard", "quadrillion", "quadrilliard", "quintillion", "quintilliard"]
	let frenchUnits = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"]
	let frenchTens = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"]
	let frenchTeens = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"]

	let words = []

	if (input < 0) {
		words = append(words, "moins")
		input *= -1
	}

	let triplets = integerToTriplets(input)

	// zero is a special case
	if (triplets.length == 0) {
		return "zéro"
	}

	for (let idx = triplets.length - 1; idx >= 0; idx--) {
		let triplet = triplets[idx]

		// nothing todo for empty triplet
		if (triplet == 0) {
			continue
		}

		// special cases
		if (triplet == 1 && idx == 1) {
			words = append(words, "mille")
			continue
		}

		// three-digits
		let hundreds = Math.floor(triplet / 100) % 10
		let tens = Math.floor(triplet / 10) % 10
		let units = triplet % 10
		//log.Printf("Hundreds:%d, Tens:%d, Units:%d\n", hundreds, tens, units)
		if (hundreds > 0) {
			if (hundreds == 1) {
				words = append(words, "cent")
			} else {
				if (tens == 0 && units == 0) {
					words = append(words, frenchUnits[hundreds], "cents")
					tripletEnd()
					continue
				} else {
					words = append(words, frenchUnits[hundreds], "cent")
				}
			}
		}

		if (tens == 0 && units == 0) {
			tripletEnd()
			continue
		}

		switch (tens) {
			case 0:
				words = append(words, frenchUnits[units])
				break;
			case 1:
				words = append(words, frenchTeens[units])
				break
			case 7:
				switch (units) {
					case 1:
						words = append(words, frenchTens[tens], "et", frenchTeens[units])
						break
					default:
						let word = sprintf("%s-%s", frenchTens[tens], frenchTeens[units])
						words = append(words, word)
						break
				}
				break
			case 8:
				switch (units) {
					case 0:
						words = append(words, frenchTens[tens] + "s")
						break
					default:
						let word = sprintf("%s-%s", frenchTens[tens], frenchUnits[units])
						words = append(words, word)
						break
				}
				break
			case 9:
				let word = sprintf("%s-%s", frenchTens[tens], frenchTeens[units])
				words = append(words, word)
				break
			default:
				switch (units) {
					case 0:
						words = append(words, frenchTens[tens])
						break
					case 1:
						words = append(words, frenchTens[tens], "et", frenchUnits[units])
						break
					default:
						let word = sprintf("%s-%s", frenchTens[tens], frenchUnits[units])
						words = append(words, word)
						break
				}
				break
		}

		function tripletEnd() {
			let mega = frenchMegas[idx]
			if (mega != "") {
				if (mega != "mille" && triplet > 1) {
					mega += "s"
				}
				words = append(words, mega)
			}
		}

		tripletEnd()

	}

	return words.join(" ")
}