function convertHashStringToInt(key, tableSize) {
  let hashCode = 13;

  for (let i = 0; i < key.length; i++) {
    hashCode = (hashCode * key.charCodeAt(i)) % tableSize;
  }
  return hashCode;
}

function HashMap() {
  this.table = new Array(17);

  HashMap.prototype.put = function (key, value) {
    const index = convertHashStringToInt(key, this.table.length);
    console.log(index);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  HashMap.prototype.remove = function (key) {
    const index = convertHashStringToInt(key, this.table.length);
    this.table[index].find((data) => data[0] === key).pop();
  };

  HashMap.prototype.containKey = function () {};

  HashMap.prototype.get = function (key) {
    const index = convertHashStringToInt(key, this.table.length);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].find((data) => data[0] === key)[1];
  };

  HashMap.prototype.isEmpty = function () {};

  HashMap.prototype.keys = function () {
    let keys = [];
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
myTable.put("0123", "foo");
console.log(myTable.get("firstname"));
console.log(myTable.get("lastname"));
console.log(myTable.get("age"));
console.log(myTable.table);
myTable.remove("firstname");
console.log(myTable.table);
console.log(myTable.keys());
