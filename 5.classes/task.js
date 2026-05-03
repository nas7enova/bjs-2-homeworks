class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this._state * 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(...args) {
		super(...args);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(Book) {
		if (Book.state > 30)
			this.books.push(Book);
	}

	findBookBy(type, value) {
		const found = this.books.find(book => book[type] === value);
		return found || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);

		if (index !== -1) {
			const foundBook = this.books[index];
			this.books.splice(index, 1);
			return foundBook;
		}

		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark >= 2 && mark <= 5) {
			if (!this.marks[subject]) {
				this.marks[subject] = [];
			}
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject] || this.marks[subject].length === 0) {
			return 0;
		}
		const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);
		if (subjects.length === 0) return 0;

		const sumOfAverages = subjects.reduce((sum, subject) => {
			return sum + this.getAverageBySubject(subject);
		}, 0);

		return sumOfAverages / subjects.length;
	}
}