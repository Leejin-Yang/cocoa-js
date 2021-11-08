function convertHashStringToInt(key, tableSize) {
  let hashCode = 13;

  for (let i = 0; i < key.length; i++) {
    hashCode = (hashCode * key.charCodeAt(i)) % tableSize;
  }
  console.log(hashCode);
  return hashCode;
}

function HashMap() {
  this.table = new Array(17);

  HashMap.prototype.put = function (key, value) {
    const index = convertHashStringToInt(key, this.table.length);
    this.table[index] = value;
  };

  HashMap.prototype.remove = function () {};
  HashMap.prototype.containKey = function () {};

  HashMap.prototype.get = function (key) {
    const index = convertHashStringToInt(key, this.table.length);
    return this.table[index];
  };

  HashMap.prototype.isEmpty = function () {};
  HashMap.prototype.keys = function () {};
  HashMap.prototype.replace = function () {};
  HashMap.prototype.size = function () {};
  HashMap.prototype.clear = function () {};
}

const myTable = new HashMap();
myTable.put("firstname", "tom");
console.log(myTable.get("firstname"));
console.log(myTable.get("melonaeeerqe"));
