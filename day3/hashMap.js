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
    this.table[index].splice(this.table[index].findIndex(predicate(key), 1));
  };

  HashMap.prototype.containKey = function (key) {};

  HashMap.prototype.get = function (key) {
    const index = convertHashStringToInt(key, tableSize);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].find(predicate(key))[1];
  };

  HashMap.prototype.isEmpty = function () {};

  HashMap.prototype.keys = function () {
    const keys = [];
    for (const index in this.table) {
      this.table[index].forEach(([key]) => keys.push(key));
    }
    return keys;
  };

  HashMap.prototype.replace = function () {};
  HashMap.prototype.size = function () {};
  HashMap.prototype.clear = function () {};
}

const myTable = new HashMap();
myTable.put("firstname", "tom");
myTable.put("lastname", "yang");
myTable.put("012", "foo");
console.log(myTable.get("firstname"));
console.log(myTable.get("lastname"));
console.log(myTable.get("age"));
console.table(myTable.table);
myTable.remove("firstname");
console.table(myTable.table);
console.log(myTable.keys());
