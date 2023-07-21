class MyClass {
  static firstStaticField = "First Static Field";
  static secondStaticField;

  static {
    MyClass.secondStaticField = "Second Static Field";
  }

  static firstStaticMethdod() {
    return "First Static Method";
  }
}

console.log(MyClass.firstStaticField);
console.log(MyClass.secondStaticField);
console.log(MyClass.firstStaticMethdod());
