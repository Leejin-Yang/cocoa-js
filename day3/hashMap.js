function convertHashStringToInt(key, tableSize) {
  let hashCode = 1;

  for (let i = 0; i < key.length; i++) {
    hashCode = (hashCode * key.charCodeAt(i)) % tableSize;
  }
  return hashCode;
}

function HashMap() {
  this.table = new Array(13);
  const tableSize = this.table.length;

  function predicate(key) {
    return (item) => item[0] === key;
  }

  HashMap.prototype.put = function (key, value) {
    const index = convertHashStringToInt(key, tableSize);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  HashMap.prototype.remove = function (key) {
    const index = convertHashStringToInt(key, tableSize);
    const itemIndex = this.table[index].findIndex(predicate(key));
    this.table[index].splice(itemIndex, 1);
  };

  HashMap.prototype.containKey = function (key) {
    const keys = this.keys();
    return keys.includes(key);
  };

  HashMap.prototype.get = function (key) {
    const index = convertHashStringToInt(key, tableSize);
    if (!this.table[index]) {
      return null;
    }
    const value = this.table[index].find(predicate(key))[1];
    return value;
  };

  HashMap.prototype.isEmpty = function () {
    return Boolean(!this.size());
  };

  HashMap.prototype.keys = function () {
    const keys = [];
    for (const index in this.table) {
      this.table[index].forEach(([key]) => keys.push(key));
    }
    return keys;
  };

  HashMap.prototype.replace = function (key, value) {
    const index = convertHashStringToInt(key, tableSize);
    this.table[index].find(predicate(key))[1] = value;
  };

  HashMap.prototype.size = function () {
    let size = 0;
    for (const index in this.table) {
      size += this.table[index].length;
    }
    return size;
  };

  HashMap.prototype.clear = function () {
    this.table.splice(0, tableSize);
    this.table = new Array(tableSize);
  };
}

const myTable = new HashMap();
console.log(myTable);
console.log(myTable.isEmpty());
myTable.put("firstname", "tom");
myTable.put("lastname", "yang");
myTable.put("012", "foo");
console.log(myTable);
console.log(myTable.isEmpty());
// console.log(myTable.get("firstname"));
// console.log(myTable.get("lastname"));
// console.log(myTable.get("age"));
// console.log(myTable.containKey("firstname"));
// console.table(myTable.table);
// console.log(myTable.size());
// myTable.replace("firstname", "leejin");
// console.log(myTable.get("firstname"));
// console.table(myTable);

// myTable.remove("lastname");
// console.table(myTable.table);
// console.log(myTable.keys());
// console.log(myTable.containKey("firstname"));
// console.log(myTable.size());

// myTable.clear();
// console.log(myTable);
